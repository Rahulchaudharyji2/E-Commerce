import React from 'react';
import { Image } from 'react-bootstrap';

function CarouselImage({ src, alt }) {
    
    
  return (
    <Image
      className="d-block w-100 "
      src={src}
      
    />
  );
}

export default CarouselImage;
