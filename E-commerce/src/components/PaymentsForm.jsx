import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePayment } from '../features/checkout-slice';

export default function PaymentsForm() {
    const payment= useSelector(state=> state.checkout.payment);
    const dispatch = useDispatch();
    function handleChange(event){
        const {name , value} = event.target;
        dispatch(updatePayment({[name]: value}));
    }
  return <>
  <Typography variant='h6' gutterBottom>
    Payment Method
  </Typography>
  <Box component='form' onChange={handleChange}>
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <TextField name="name" id='name' variant='standard' required label="Name on Card" fullWidth autoComplete='cc-name' defaultValue={payment?.name ?? " "}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField name='cardNumber' id='cardNumber' variant='standard' required label="Card Number" fullWidth autoComplete='cc-number' defaultValue={payment?.cardNumber ?? ""}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField name='expDate' id='expDate' variant='standard' required label="Expiry Date" fullWidth autoComplete='cc-exp' defaultValue={payment?.expDate ?? ""}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField name='CVV' id='CVV' variant='standard' required label="CVV" type='password' fullWidth autoComplete='cc-csc' defaultValue={payment?.CVV ?? ""}/>
        </Grid>
    </Grid>
  </Box>
  </>
}
