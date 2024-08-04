import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { addProduct } from '../lib/apis';      // Adjust the path as per your file structure
import { toast } from 'react-toastify';
const NewForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const productData = {
            name: data.get('name'),
            price: parseFloat(data.get('price')), // Convert price to a number if needed
            desc: data.get('desc'),
            imageUrl: data.get('imageUrl'),
        };

        try {
            const newProduct = await addProduct(productData);
            toast.success('Product added successfully', {
        position: "top-left"})
            console.log('Product added successfully:', newProduct);
            // Optionally, you can show a success message or navigate to another page
        } catch (error) {
          toast.error('Product added successfully', {
            position: "top-left"})
            console.error('Error adding product:', error.message);
            // Handle error, show error message, etc.
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AddCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    New Product Form
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        name="price"
                        type="number"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="desc"
                        label="Description"
                        name="desc"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="imageUrl"
                        label="Image URL"
                        name="imageUrl"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default NewForm;
