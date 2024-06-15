import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../product/Product';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';

function Home() {
    const { currentUser } = useContext(userLoginContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch product data from API
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();

                // Limit the number of products to display to 16
                const limitedProducts = data.products.slice(0, 16);
                setProducts(limitedProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            {/* Display welcome message or store greeting based on user login */}
            {currentUser.username ?
                <h1 className='m-4 text-center'>Welcome {currentUser.username}</h1> :
                <h1 className='m-4 text-center'>Welcome to our store</h1>
            }

            {/* Render products */}
            <div className="product-list row justify-content-center flex-wrap">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
