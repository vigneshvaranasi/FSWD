import React, { useContext } from 'react';
import './Product.css';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { cartContext } from '../../Contexts/cartContext';

function Product({ product, showAddToCart}) {
    const { currentUser, userLoginStatus } = useContext(userLoginContext);
    const { addToCart,removeFromCart } = useContext(cartContext);

    return (
        <div className='col-12 col-sm-6 col-md-4 d-flex col-lg-3 mb-3'>
            <div className="card">
                <div className='item'>
                    <img src={product.images[0]} className="card-img-top product-image" alt={product.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text textJustify">{product.description}</p>
                    <p className="card-price text-secondary fs-4">${product.price}</p>
                    {
                        showAddToCart && userLoginStatus &&
                        <div>
                            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    }
                    {
                        !showAddToCart &&
                        <div>
                            <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;
