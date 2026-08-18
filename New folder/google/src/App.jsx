import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let routers= createBrowserRouter([{
  path:'/',element:<Layout/>, children:[
    { path:"home",element:<Home/>},
     { path:"Navbar",element:<NavBar/>},
      { path:"a",element:<A/>}, 
  ]
}])

 


function App() {

  return (
  
    <>
    {/*<NavBar/>
  <Home/> */}
  return <RouterProvider router={routers}/>
  </>

 
  )
}

export default App
