const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser=require('cookie-parser')
const userRoutes=require('./routes/userRoutes');
const authRoute = require("./routes/authRoutes");
const orderRoutes=require('./routes/orderRoutes')





// This is used to parse JSON data coming in request body
// Middleware to parse incoming requests with JSON payloads



app.use(cookieParser());

app.use(express.json());







// Middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

//Cors
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
}));


// Routes
const productRoutes = require('./routes/productRoutes');

// Echo route for testing
app.get('/echo', (req, res) => {
    res.send('received echo');
});

// Use the product routes with a prefix
app.use (authRoute);
app.use(productRoutes);

app.use(userRoutes);
app.use(orderRoutes);
//use the user models





// Error Handler
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal server error' } = err;
    res.status(status).json({ errMsg: message })
});

module.exports = app;

