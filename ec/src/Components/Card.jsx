import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
const productCard = ({product}) => {
    return (
        <Card style ={{maxwidth:200}}>
            <CardMedia
                component="img"
                alt={product.name}
                height="100"
                name={product.name}
            />
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">{product.price}</Typography>
            </CardContent>
        </Card>
    );
}
export default productCard;