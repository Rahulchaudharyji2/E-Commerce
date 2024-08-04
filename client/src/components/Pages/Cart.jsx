import React, { Fragment, useContext } from 'react';
import { Box, List, Divider, Typography, Button } from '@mui/material';
import CartContext from '../store/card-context';
import { placeOrder } from '../lib/apis';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const placeOrderMutation = useMutation(placeOrder);

  const placeOrderHandler = () => {
    placeOrderMutation.mutate(cart, {
      onSuccess: () => {
        toast.success('Order Placed Successfully', {
          position: 'top-left',
        });
        clearCart();
      },
      onError: () => {
        toast.error('Error placing order');
      },
    });
  };

  const deliveryCharge = 49;

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
      amount: (cart.reduce((total, item) => total + item.price * item.qty, 0) + deliveryCharge) * 100,
      currency: "INR",
      name: "E-Commerce",
      description: "Thank you for shopping with us",
      image: "https://i.ibb.co/0s5z6yX/ecommerce.png",
      handler: ({ payment_id }) => {
        toast.success('Payment Successful',{
        position: "top-left"})
        clearCart();
        navigate("/");
      },
      /*prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      } */
     
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: '360px', margin: '0 auto', mt: 5 }}>
        <Typography variant='h5' component="h1">My Cart</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {cart.map((item) => (
            <Fragment key={item.id}>
              <Card variant="outlined" sx={{ display: 'flex', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: 90, height: 90 }}>
                  <img src={item.imageUrl} alt={item.productName} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </Box>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    {`${item.productName} x ${item.qty}`}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Rs. {item.price}
                  </Typography>
                </CardContent>
              </Card>
              <Divider />
            </Fragment>
          ))}
        </List>
        <Typography variant='h6' component="h6">Total: Rs. {cart.reduce((total, item) => total + item.price * item.qty, 0) }</Typography>
        <Button variant="outlined" size="small" onClick={displayRazorpay}>Place Order</Button>
      </Box>
    </>
  );
};

export default Cart;


