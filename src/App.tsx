import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './Assets/CSS/App.css'

import Chapters from './Components/Chapters'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>The Holy Qur'an</h1>

          <Chapters baseURL={'https://api.quran.com/api/v4'}></Chapters>

        </header>
      </div>
    </QueryClientProvider>
  )
}

export default App
