import  { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from '../SearchBar/SearchBar';
import UserContext from '../store/user-context';
import CartContext from '../store/card-context';
import './Navbar.css';
import SearchBarSection from '../SearchBar/SearchBar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const { user, logoutMutation } = useContext(UserContext);
  const { cartLength } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0C1844' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          
          <Typography sx={{textDecoration:'none'}} component={Link} to="/" color="inherit">
            E comm</Typography>
            
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchBarSection>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </SearchBarSection>
            

          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {user && <Button component={Link} to="/" color="inherit">{user.username}</Button>}
          {user && <Button     component={Link} to="/new" color="inherit">New</Button>}
          
          {!user && <Button component={Link} to="/login" color="inherit">Login</Button>}
          {user && (
            <Button component={Link} to="/cart" color="inherit">
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          )}
          
          {user && <Button onClick={() => logoutMutation.mutate()} color="inherit">Logout</Button>}
          <IconButton size="large" edge="end" color="inherit" aria-label="display more actions">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
