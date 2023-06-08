import React from 'react'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material"
import { light } from '@mui/material/styles/createPalette'
import Header from './Header'

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
        <main>This is main coming from the layout component</main>
        <footer></footer>
    </ThemeProvider>
    
  )
}
