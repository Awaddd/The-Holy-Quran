import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil';
import Home from './Pages/Home'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Home></Home>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
