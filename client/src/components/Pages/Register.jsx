import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMutation } from 'react-query';
import { registerUser } from '../lib/apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const mutation = useMutation(registerUser);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const newUser = {
            username: data.get('username'),
            password: data.get('password'),
            email: data.get('email')
          }

        mutation.mutate(newUser);
    };
    
    if (mutation.isSuccess) {
        toast.success('User registered successfully', {
            position: "top-left"
        });
        navigate('/login');
    }

    if (mutation.isError) {
      console.log(mutation.error);
      const errorMessage = mutation.error.response.data.errMsg;
      toast.error(errorMessage, {
            position: "top-left"
        });
    }
    
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
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <AddCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Account
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  type="password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                    />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Container>
      );
}

export default Register;