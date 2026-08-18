import { useState } from 'react'

export default function A() {

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  function handleSetProduct() {
    setProduct(["amany", 20]);
  }

  function handleSetCount() {
    setCount(Math.random());
  }

  return (
  <>
    <button onClick={handleSetProduct}>
      set product
    </button>

    <button onClick={handleSetCount}>
      set count
    </button>

    <h3>{product[0]}</h3>
    <h3>{product[1]}</h3>

    <h2>{count}</h2>
  </>
)
}