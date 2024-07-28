import React, { useEffect, useState } from 'react'
import './Products.css'
import Product from '../product/Product'

function Products() {
  let [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      // Fetch product data from API
      // const response = await fetch('http://localhost:4000/products-api/');
      const response = await fetch('https://ecommerce-backend-fswd.vercel.app/products-api/');
      const data = await response.json();
      // console.log('data: ', data);
      setProducts(data.payload);
      // console.log('data.payload: ', data.payload);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }
  , [])
  return (
    <div>
      {/* Render products */}
      <div className="product-list row justify-content-center flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} showAddToCart={true}/>
        ))}
      </div>
    </div>
  )
}

export default Products