import { Button, useTheme } from '@mui/material'
import {  LockOutlined } from '@mui/icons-material'
import { Avatar, Box, CssBaseline, TextField, Typography } from '@mui/material'
import { Container } from '@mui/material'

import React from 'react'
import { useAuth } from '../firebase/Auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const {signIn} = useAuth();
  async function login(event){
  event.preventDefault();
  const {email, password}= event.target;
  await signIn(email.value , password.value); 
  navigate("/");
  }
  return( <Container component={"main"} maxWidth='xs'>
    <CssBaseline/>
    <Box sx={{
      mt: theme.spacing(8),
      display:'flex',
      flexDirection:'column',
      alignItems:'center'

    }}>
<Avatar sx={{
  m:1,
  backgroundColor: theme.palette.secondary.main
}}>
  
  <LockOutlined/>
</Avatar>
<Typography component={"h1"} variant='h5'>
  Sign In
</Typography>
<form onSubmit={login} 
sx={{
  width:'100%',
  mt:1,
}}>

  <TextField variant='outlined' margin='normal' required
  label="email" fullWidth id='email' name='email' type='email' autoFocus autoComplete='off'></TextField>
  <TextField label='Password' variant='outlined' margin='normal' required
  fullWidth id='password' name='password'type='password' autoFocus autoComplete='current-password'></TextField>
  <Button type='submit' variant='contained' fullWidth color='primary'sx={{
    margin: theme.spacing(3,0,2),
  }}>Sign In</Button>
</form>
  </Box>
  </Container>
  )
}
