import React from 'react'
import {Container} from '@mui/material'
import {Grid} from '@mui/material'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { CardContent, CardMedia, Rating , Card , TextField} from '@mui/material'
import { useTheme } from '@emotion/react'
import { getSubtotal } from '../utils'


export default function Cart() {
  const cart = useSelector((state)=> state.cart?.value);
  const theme = useTheme();
  return (
  <Container sx={{py:8}}>
  <Grid container spacing={2}>
   <Grid item container spacing={2} md={8}>
    {cart?.map(({product , quantity})=>{
         const {title, id , price , image, description , rating} = product;
         return (
         <Grid item key={id} xs={12}>
          <Card sx={{
           display:'flex',
           py:2,

          }}>
            <CardMedia component="img" image={image} sx={{
                 width: theme.spacing(30),
                 height: theme.spacing(30),
                 objectFit: "contain",
                 pt: theme.spacing(),
                 }}
                 alt={title}/>
                 <CardContent sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  alignItems:'center',
                 }}>
                  <Box sx={{display:'flex' , flexDirection:'column',gap:2}}>
                    <Typography>
                      {title}
                    </Typography>
                    <Rating readOnly precision={0.5} value={rating.rate}/>
                    <form>
                      <TextField label="Quantity" value={quantity}>
                      </TextField>
                    </form>
                  </Box>
                  <Box>
                    <Typography variant='h5' paragraph>
                      {getSubtotal([{product, quantity}])}
                    </Typography>
                  </Box>
                 </CardContent>
          </Card>
         </Grid>
         );
    })}
</Grid>
    <Grid item container md={4}>
    <Typography variant='h6'>Subtotal</Typography>
    <Typography variant='h5'>{getSubtotal(cart)}</Typography>
   </Grid>
    </Grid>
  </Container>
)}
