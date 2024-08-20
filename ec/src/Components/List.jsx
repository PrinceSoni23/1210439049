import React ,{useEffect, useState} from 'react';
import {Grid,Container} from '@mui/material';
import {getProducts} from "../Services/service.jsx";
import ProductCard from './Card';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       const giveProducts = async () => {
           const products = await getProducts();
           setProducts(products);
       };
       giveProducts();
    }, []);
    return (
        <Container>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;