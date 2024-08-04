import React from 'react'
import Product from '../Product'
import  Grid  from '@mui/material/Grid'
import Box from '@mui/material/Box'


const ProductList = ({productList}) => {
  return (
    <>
    <Box  sx={{ width:'80vw', margin:'0px auto'}}>
      <h1> Explore Items</h1>
      <Grid container spacing={{ xs:2,md:3}}>
        {
         productList.map((product,idx)=>{
            return(
              <Grid key={idx} item xs={12} md={6} lg={4}>
                <Product
               id ={product._id}
              name= {product.name}
              price={product.price}
              desc={product.desc}
              imageUrl={product.imageUrl}
              />
              </Grid>

            )
          })
        }
      </Grid>

    </Box>
    </>
  )
}

export default ProductList;