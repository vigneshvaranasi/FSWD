import React from 'react';
import './Product.css';

function Product({ product }) {
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
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default Product;
