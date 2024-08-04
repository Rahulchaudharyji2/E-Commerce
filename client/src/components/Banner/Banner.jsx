/*import React from 'react';
import { Box, Typography } from '@mui/material';
import "./Banner.css";

const Banner = () => {
  return (
    <Box className="banner" sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        
        <Typography variant="h4" color="white" component="h4" sx={{mb:'1rem'}}>Discover the best Products in Delhi NCR</Typography>
      
    </Box>
  )
}

export default Banner;*/

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Image';
import "./Banner.css";
import { height } from '@mui/system';
import { styled } from '@mui/material';


function Banner() {
  
  const images = [
    
   // { src: 'https://i.pinimg.com/originals/c4/d4/bc/c4d4bca287ab36084141171adf86ffd0.jpg', alt: 'First slide' },
    //{ src: 'https://i.pinimg.com/originals/95/01/8e/95018eb9e6cb278355afef529cfb3b14.png', alt: 'First slide'},
    //{ src: 'https://i.pinimg.com/originals/31/93/76/3193762870f0f82eff6a33e9de8318cd.png', alt: 'First slide'},




  
    { src: 'https://i.pinimg.com/originals/ec/9e/98/ec9e986325ccf790aacbe2a33f1ebcc9.jpg', alt: 'Second slide' },
    { src:"https://i.pinimg.com/originals/4b/ce/d0/4bced0b68989403abb8b49f1127a5bc0.jpg", alt: 'Second slide' },
  { src:"https://i.pinimg.com/originals/49/14/07/491407f741f2469c110d29c7b49bd237.png", alt: 'Second slide' },
  
   // { src: 'https://i.pinimg.com/originals/e8/d7/6d/e8d76db8cd43018bbb51911c59e1bff0.png', alt: 'Third slide' },
  ];
  // Inline style for the carousel
  

  return (
    
<Carousel >
        {images.map((image, index) => (
        <Carousel.Item key={index} style={{height:"600px", backgroundPosition:"center",backgroundSize:"cover",objectFit:"cover",overflow:"hidden",width:"92vw",marginLeft:"70px",marginTop:"10px"}}>
          <ExampleCarouselImage src={image.src} alt={image.alt}  />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
