import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../product/Product';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';

function Home() {
    const { currentUser } = useContext(userLoginContext);
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div>
            <h1>Home</h1>
            {/* Display welcome message if user is logged in */}
            {currentUser.username && <h1>Welcome {currentUser.username}</h1>}
            
            {/* Render products */}
            {/* <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div> */}
        </div>
    );
}

export default Home;
