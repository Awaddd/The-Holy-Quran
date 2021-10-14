import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './Pages/Home'
import {ThemeProvider} from 'styled-components'

const theme = {
    flexboxgrid: {
      // Defaults
      gridSize: 12, // columns
      gutterWidth: 1, // rem
      outerMargin: 0, // rem
      mediaQuery: 'only screen',
      container: {
        sm: 46, // rem
        md: 61, // rem
        lg: 76  // rem
      },
      breakpoints: {
        xs: 0,  // em
        sm: 48, // em
        md: 64, // em
        lg: 75  // em
      }
    }
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <Home></Home>
        </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
