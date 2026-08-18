import React from 'react'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return <>
  <Header/>
  <Outlet></Outlet>
  <Footer/>

</>
}