import React from 'react'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material"
import { light } from '@mui/material/styles/createPalette'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const theme = createTheme({
    palette : {
        mode: "light",
    }  

})

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
       <Header/>
        <Outlet/>
        <footer></footer>
    </ThemeProvider>
    
  )
}
