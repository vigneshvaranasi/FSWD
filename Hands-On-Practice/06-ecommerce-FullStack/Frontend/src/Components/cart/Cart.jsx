import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import { userLoginContext } from '../../Contexts/userLoginContext';
import Product from '../product/Product';
import toast from 'react-hot-toast';


function Cart() {
  const { currentUser } = useContext(userLoginContext);
  const [cartItems, setCartItems] = useState([]);

  async function getCartProductsofUserCart() {
    try {
      // Fetch product data from API
      // const response = await fetch(`http://localhost:4000/user-api/users/${currentUser.username}`, {
      const response = await fetch(`https://ecommerce-backend-fswd.vercel.app/user-api/users/${currentUser.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      const cartList = await response.json();

      // if cart is not aviailable
      if (!cartList.payload.cart) {
        console.log('Cart is empty');
        setCartItems([]);
        return;
      }
      // console.log('Fetched cart data: ', cartList.payload.cart);
      setCartItems(cartList.payload.cart);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  // Remove from cart
  async function removeFromCart(productId) {
    try {
        // Log productId for debugging
        // console.log('Removing product with ID:', productId);
        // const response = await fetch(`http://localhost:4000/user-api/delete-from-cart/${currentUser.username}`, {
        const response = await fetch(`https://ecommerce-backend-fswd.vercel.app/user-api/delete-from-cart/${currentUser.username}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ product: { id: productId } })
        });
        const res = await response.json();
        // console.log('Product removed:', res);
        getCartProductsofUserCart();

        // Notify user of successful removal
        toast.success('Product removed from cart',{
          style:{
            marginTop:'-10px',
            marginBottom:'10px',
            borderRadius:'10px',
            background: '#333',
            color: '#fff',
          },
          icon: '🗑️'
        });
    }
    catch (error) {
        console.error('Error removing product:', error);
        toast.error('Error removing product from cart',{
          style:{
            marginTop:'-10px',
            marginBottom:'10px',
            borderRadius:'10px',
            background: '#333',
            color: '#fff',
          },
          icon: '🚫'
        });
    }
}





  // Fetch cart items when component mounts
  useEffect(() => {
    getCartProductsofUserCart();
  }, [currentUser.username]);

  return (
    <div>
      {(cartItems.length === 0 || !cartItems) ? (
        <h1 className='m-4 text-center'>Cart is empty</h1>
      ) : (
        <>
          <h1 className='m-4 text-center'>Cart</h1>
          <div className="product-list row justify-content-center flex-wrap">
            {cartItems.map((product, index) => (
              <Product key={index} product={product} showAddToCart={false} onProductRemove={removeFromCart} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
