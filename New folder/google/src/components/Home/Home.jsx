import { useState,useEffect } from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home()

{
  const [products, setProducts] = useState([]);

  async function getProducts() 
  {
    var response = await fetch('https://fakestoreapi.com/products')
 
    var finalResult = await response.json();
    setProducts(finalResult);
 return finalResult;
  }
  useEffect(() => {
    getProducts();
  }, []);


function deleteProduct(id) 
    {
  var newProducts = products.filter((item) => item.id !== id);
  setProducts(newProducts);


    }
  return (
    <>
   

      <h1> Marketly </h1>

      <div className="products-container">
        {products.map((item,index) => (
          
          <div className="product-card" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} />
            <p className ={item.price>50?'text-danger':''}>price :{item.price} $</p>
            <p>count : {item.rating.count}</p>
            <p> Rate :{item.rating.rate} *****</p>
            <button className="btn btn-outline-danger btn-sm w-100 " onClick={() => deleteProduct(item.id)}>Delete</button><br/>
              <button className="btn btn-outline-primary btn-sm w-100 ">Update</button>
          </div>
        ))}
       
      </div>
    </>
  );
}