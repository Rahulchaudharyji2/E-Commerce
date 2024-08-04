import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchResults = async () => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('query');
  
      try {
        const response = await fetch(`http://localhost:8080/products/search?query=${query}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle error state in your component
      }
    };
  
    fetchResults();
  }, [location.search]);
  

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 5 }}>
      <Typography variant="h4" component="h1">Search Results</Typography>
      {results.length > 0 ? (
        results.map((product) => (
            <Card key={product._id} variant="outlined" sx={{ display: 'flex', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 90, height: 90 }}>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">{product.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">Rs. {product.price}</Typography>
              <Typography variant="body2" color="text.secondary" component="div">{product.description}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6">No results found</Typography>
      )}
    </Box>
  );
};

export default SearchResults;
