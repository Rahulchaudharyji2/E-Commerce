import {useEffect,useState} from 'react'
import ProductList from '../Product/ProductList/ProductList'
import axios from 'axios'
import Banner from '../Banner/Banner'
import ProductCategory from '../ProductCategory/ProductCategory'
import { Typography } from '@mui/material'


const AllProduct = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        console.log('First use effect with empty dependency array');
        setIsLoading(true);
        axios.get('http://localhost:8080/products')
          .then((res) => {
            setProductList(() => [...res.data]);
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          })
          .finally(() => {
            setIsLoading(false);
        })
      }, []);
      if (isLoading) {
        return <p>Loading the data........</p>
      }
    
      if (error != null && isLoading == false) {
        return <p>Oops Something Went Wrong: { error }</p>
      }

    return (
        <>
         <Banner/>
         <Typography sx={{ width:'80vw', margin:'auto',marginTop:'20px', marginBottom:'5px'}} >
          <h1> Our Collections </h1>
          </Typography>
         <ProductCategory/>
        <ProductList productList={productList}/>
        </>
    )
}

export default AllProduct