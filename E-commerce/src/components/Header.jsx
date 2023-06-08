import React from 'react'
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography , } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return <>
  
   <AppBar position='sticky'>
    <Toolbar>
        <Typography variant='h6' color='inherit' sx={{
            flexGrow: 1,
        }}>Ecomm</Typography>
        <Box sx={{display:{xs : 'none' , md: 'flex'}}}>
        <IconButton size='large' aria-label='shows cart items count' color='inherit'>
            <Badge badgeContent={1} color='error'>
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        </Box>
        <Button color='inherit'>Login</Button>
    </Toolbar>
   </AppBar>
  </>
  
}
