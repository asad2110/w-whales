import { ThemeProvider } from "theme-ui"
import "normalize.css"
import { AppProps } from "next/app"
import Router from "next/router"
import withGA from "next-ga"

import theme from "../styles/theme"

import {BrowserRouter, Switch, Route} from 'react-router-dom'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} /> 
    // <ThemeProvider theme={theme}>
      
      
    // </ThemeProvider>  
    
  )
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(MyApp)
