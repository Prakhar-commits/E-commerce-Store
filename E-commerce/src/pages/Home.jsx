import { Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'


export  function Home() {

    const [products, setProducts] = useState([]);

    async function fetchAllProducts(){
     const response = await  fetch('https://fakestoreapi.com/products')
           const result = await response.json();
           setProducts(result);
    }

    useEffect(()=>{
        fetchAllProducts();
    },[]);
  return (
  
    <Container sx={{py:8}} maxWidth="lg">
        <Grid container spacing={4} xs={12} sm={6} md={3}>
            {products.map(({title, id , rating , description , price , image})=>(
                <Grid item key={id}>
                    <Card sx={{height: "100%",display:"flex" , flexDirection:"column"}}>
                     <CardMedia component="img" sx={{}} image={image} alt={title} ></CardMedia>
                     <CardContent>
                        <Typography variant='h5' component='h2' gutterBottom sx={{}}>{title}</Typography>
                        <Typography >{description}</Typography>
                        <Typography>{price}</Typography>
                        <Rating readOnly precision={0.5} value={rating.rate}/>
                     </CardContent>
                    </Card>
                </Grid>))}
        </Grid>
    </Container>
  )
}
