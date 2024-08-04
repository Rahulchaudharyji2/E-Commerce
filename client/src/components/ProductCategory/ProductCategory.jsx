import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "./ProductCategory.css"

const ProductCategory = () => {
    return (
        <Box sx={{width:'80vw', margin:'40px auto'}}>
             <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid  item xs={12} md={6} lg={4}>
                    <Card className='productCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://cdn.pixabay.com/photo/2017/04/05/01/12/traveler-2203666_640.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Latest Fashion
                            </Typography>
                            <Typography component="p" color="gray">
                                Top Brand
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='productCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://cdn.pixabay.com/photo/2018/03/06/08/31/drone-3202860_640.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Electronic Gadgets
                            </Typography>
                            <Typography component="p" color="gray">
                                Of Top Brand 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card className='productCatagory' sx={{ maxWidth: 345, transition:'150ms' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://cdn.pixabay.com/photo/2017/07/10/19/42/brush-2491235_640.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Beauty Products 
                            </Typography>
                            <Typography component="p" color="gray">
                                oF Top Brand
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
      </Box>

  )
}

export default ProductCategory;