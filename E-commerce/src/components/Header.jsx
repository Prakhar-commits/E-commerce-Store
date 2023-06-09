import React, { useState } from 'react'
import { AppBar, Autocomplete, Badge, Box, Button, IconButton, TextField, Toolbar, Typography , } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { getItemCount } from '../utils';
import {styled , alpha} from '@mui/material/styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { fetchAllCategories } from '../features/categories-slice';



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



function SearchBar(){
    const products = useSelector(state=> state.products.value);
    const categories = useSelector(state=> state.categories?.value);
    const dispatch = useDispatch();
    const[selectedCategory , setSelectedCategory] = useState("all")
    if(!categories.length){
      dispatch(fetchAllCategories());
    }
    function handleCategoryChange(event){
        const {value} = event.target;
        setSelectedCategory(value);
    }
    return <Search>
        <Select
        value={selectedCategory} 
        size='small' sx={{
            m:1,
            "&":{},
        }}
        variant='standard'
        labelId='selected-category'
        id='selected-category-id'
        onChange={handleCategoryChange}>
            <MenuItem value="all">all</MenuItem>
            {categories?.map(category=><MenuItem key={category} value={category}>{category}</MenuItem>)}
        </Select>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Array.from(products,(prod)=>({id:prod.id, label:prod.title}))}
        sx={{width:300}}
        renderInput={(params)=><TextField {...params} />}/>
    </Search>
}

export default function Header() {
    const cartItems = useSelector((state)=>state.cart?.value);
    const count =  getItemCount(cartItems);
  return <>
  
   <AppBar position='sticky'>
    <Toolbar>
        <Typography variant='h6' color='inherit'>Ecomm</Typography>
        <SearchBar/>
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
