import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import Product from '../product/Product';
import toast from 'react-hot-toast';
import { cartContext } from '../../Contexts/cartContext';


function Cart() {
  const { cartItems,removeFromCart } = useContext(cartContext);
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
