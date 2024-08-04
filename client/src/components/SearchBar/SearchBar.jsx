import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import "./SearchBar.css"
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div>
      <TextField 
      
        label= ""  
        variant="outlined" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> 
      <Button variant="contained" onClick={handleSearch} sx={{marginTop:"10px"}}>
        Search
      </Button>
    </div>
    
  );
};

export default SearchBar;
