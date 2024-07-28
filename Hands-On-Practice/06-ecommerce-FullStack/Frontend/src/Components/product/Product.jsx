import React, { useContext } from 'react';
import './Product.css';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { toast } from 'react-toastify';

function Product({ product, showAddToCart, onProductRemove }) {
    const { currentUser, userLoginStatus } = useContext(userLoginContext);
    let productObj = product;

    async function addToCart(productObj) {
        try {
            let res = await fetch(`http://localhost:4000/user-api/add-to-cart/${currentUser.username}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({product: productObj})
            });
            res = await res.json();
            console.log('res: ', res);

        } catch (error) {
            console.error('Error adding product to cart:', error);
        }

        toast.success('Product added to cart', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }


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
