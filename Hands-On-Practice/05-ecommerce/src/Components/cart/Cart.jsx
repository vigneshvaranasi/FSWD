import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import { userLoginContext } from '../../Contexts/userLoginContext';
import Product from '../product/Product';

function Cart() {
  const { currentUser } = useContext(userLoginContext);
  const [cartItems, setCartItems] = useState([]);

  async function getCartProductsofUserCart() {
    try {
      // Fetch product data from API
      // const response = await fetch(`http://localhost:4000/user-cart?username=${currentUser.username}`);
      const response = await fetch(`https://user-api-6z6q.onrender.com/user-cart?username=${currentUser.username}`);
      const cartList = await response.json();
      console.log('data: ', cartList);
      setCartItems(cartList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetch cart items when component mounts
  useEffect(() => {
    getCartProductsofUserCart();
  }, [currentUser.username]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className='m-4 text-center'>Cart is empty</h1>
      ) : (
        <>
          <h1 className='m-4 text-center'>Cart</h1>
          <div className="product-list row justify-content-center flex-wrap">
            {cartItems.map((product) => (
              <Product key={product.id} product={product} showAddToCart={false} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
