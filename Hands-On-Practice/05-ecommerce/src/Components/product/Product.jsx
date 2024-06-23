import React, { useContext } from 'react';
import './Product.css';
import { userLoginContext } from '../../Contexts/userLoginContext';

function Product({ product, showAddToCart, onProductRemove }) {
    const { currentUser, userLoginStatus } = useContext(userLoginContext);
    let productObj = product;

    async function addToCart(productObj) {
        productObj.username = currentUser.username;
        try {
            let res = await fetch('https://user-api-6z6q.onrender.com/user-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productObj)
            });

            if (res.status === 201) {
                console.log('Product added to cart');
            } else {
                const errorData = await res.json();
                console.error('Failed to add product to cart:', res.status, errorData);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    }

    return (
        <div className='col-12 col-sm-6 col-md-4 d-flex col-lg-3 mb-3'>
            <div className="card">
                <div className='item'>
                    <img src={product.images[0]} className="card-img-top product-image" alt={product.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-price text-secondary fs-4">${product.price}</p>
                    {
                        showAddToCart && userLoginStatus &&
                        <div>
                            <button className="btn btn-primary" onClick={() => addToCart(productObj)}>Add to Cart</button>
                        </div>
                    }
                    {
                        !showAddToCart &&
                        <div>
                            <button className="btn btn-danger" onClick={() => onProductRemove(productObj.id)}>Remove</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;
