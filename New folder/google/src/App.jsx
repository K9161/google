import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'


 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <NavBar/>
  <Home/>
  
    </>
  )
}

export default App
