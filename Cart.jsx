import React, { useState } from 'react'
export default function Card(
  {
    mohamed
  }
) {
const [prtoducts,setProduct]=useState({
  name:"tv",
  grade:50
})



 
  

  return (
    <>
    <div className="div">

        <h2>{prtoducts.name}</h2>

        <button 
        onClick={
          ()=>{

setProduct({
    name:"jnhjnnjjn",
  grade:50
})          }
        }
        >
          clickme
        </button>
<h1>descriptn</h1>

<p>price</p>
    </div>
    
    
    </>
  )
}
