import React from 'react'
import {Button, Container} from '@mui/material'
import {Grid} from '@mui/material'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { CardContent, CardMedia, Rating , Card , TextField} from '@mui/material'
import { useTheme } from '@emotion/react'
import { getSubtotal } from '../utils'
import { addToCart } from '../features/cart-slice'


export default function Cart() {
  const cart = useSelector((state)=> state.cart?.value);
  const theme = useTheme();
  const dispatch = useDispatch();
  const subtotal =  getSubtotal(cart)?.toFixed(2);
  function updateQuantity(e,{product,quantity}){
     const updatedQuantity = e.target.valueAsNumber;
     if(updatedQuantity < quantity){

     }else{
        dispatch(addToCart({product}));
     }
  }
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
                  flex: 1,
                 }}>
                  <Box sx={{display:'flex' , flexDirection:'column',gap:2}}>
                    <Typography variant='h5' sx={{
                     
                    }}>
                      {title}
                    </Typography>
                    <Rating readOnly precision={0.5} value={rating.rate}/>
                    <form>
                      <TextField xs={{
                        width: theme.spacing(8),
                      }}
                      inputProps={{
                        min:0,
                        max:0,
                      }} 
                      id={`${id}-product-id`}
                      type='number'
                      variant='standard'
                      label="Quantity" value={quantity}
                      onChange={(e)=>updateQuantity(e,{product ,quantity})}>
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
    <Grid item container md={4} sx={{
      display:'flex',
      justifyContent:'center',
    }}>
      <Box sx={{
        width:"100%",

      }}>
        <Card sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
        <Typography variant='h6'>Subtotal</Typography>
        <Typography variant='h5'>{subtotal}</Typography>
        {subtotal>0 ? (<Button variant='contained'>Buy now</Button>):( <Button variant='contained' >Shop Products</Button>)}
        </Card>
      </Box>
   
   </Grid>
    </Grid>
  </Container>
)}
