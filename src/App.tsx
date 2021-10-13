import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './Pages/Home'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <Home></Home>
    </QueryClientProvider>
  )
}

export default App
