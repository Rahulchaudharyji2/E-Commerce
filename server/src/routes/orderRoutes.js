const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../Middleware/authMiddleware');
const catchAsync = require('../core/catchAsync');
const Order = require('../models/order');

router.post('/orders', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
    const { userId } = req;
    const { items } = req.body;

    const order = await Order.create({ userId: userId, items: items });
    res.status(200).json({
        message: 'Order placed successfully',
        orderId: order._id
    })
}))

router.get('/orders', async(req, res) => {
    const orders=await    Order.find({})        // Remeber product should be start wit capital P roduct
    res.json(orders);

});


module.exports = router;