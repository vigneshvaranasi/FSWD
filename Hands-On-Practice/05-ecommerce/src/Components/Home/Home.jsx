import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../product/Product';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';
import Products from '../products/Products';

function Home() {
    const { userLoginStatus,currentUser } = useContext(userLoginContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch product data from API
                const response = await fetch('http://localhost:4000/products');
                const data = await response.json();
                console.log('data: ', data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            {
                userLoginStatus && <div className="text-center">
                    <h3 className="m-4">Welcome {currentUser.username}</h3>
                </div>
            }
            {
                !userLoginStatus && <div className="text-center">
                    <h3 className="m-4">Welcome Guest</h3>
                </div>
            }
            {/* Render products */}
            <Products/>
            {/* <div className="product-list row justify-content-center flex-wrap">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div> */}
        </div>
    );
}

export default Home;
