import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

import './App.css'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Content />
    
      
      </>
  )
}

export default App
