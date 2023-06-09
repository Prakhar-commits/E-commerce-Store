import React from 'react'
import { AppBar, Autocomplete, Badge, Box, Button, IconButton, Toolbar, Typography , } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { getItemCount } from '../utils';
import {styled , alpha} from '@mui/material/styles'

const Search = styled("section")(({theme})=>({
    position:'relative',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover":{
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width:"100%",
}));    

// function SearchBar(){
//     return <Search>
//         <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={top100Films}
//         sx={{width:300}}
//         renderInput={(params)=><TextField {...params} label="Movie"/>}/>
//     </Search>
// }

export default function Header() {
    const cartItems = useSelector((state)=>state.cart?.value);
    const count =  getItemCount(cartItems);
  return <>
  
   <AppBar position='sticky'>
    <Toolbar>
        <Typography variant='h6' color='inherit'>Ecomm</Typography>
        {/* <SearchBar/> */}
        <Box sx={{display:{xs : 'none' , md: 'flex'}}}>
        <IconButton size='large' aria-label='shows cart items count' color='inherit'>
            <Badge badgeContent={count} color='error'>
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        </Box>
        <Button color='inherit'>Login</Button>
    </Toolbar>
   </AppBar>
  </>
  
}
