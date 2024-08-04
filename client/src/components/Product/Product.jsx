import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartContext from '../store/card-context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Product = ({ id, name, price, desc, imageUrl }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCartHandler = () => {
    addToCart({ id, price, productName: name, qty: 1, imageUrl });
    toast.success('Added to cart!', {
      position: "top-right"
    });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const isLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!isLoaded) {
      toast.error('Failed to load Razorpay SDK');
      return;
    }

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK",
      amount: price * 100, // Correctly set the amount
      currency: "INR",
      name: "E-Commerce",
      description: "Thank you for shopping with us",
      image: "https://i.ibb.co/0s5z6yX/ecommerce.png",
      handler: (response) => {
        toast.success('Payment Successful', {
          position: "top-left"
        });
        navigate("/");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "E-Commerce Corporate Office"
      },
      theme: {
        color: "#F37254"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ₹{price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={displayRazorpay}>Buy Now</Button>
        <Button variant="outlined" size="small" onClick={addToCartHandler}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Product;
