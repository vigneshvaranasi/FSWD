import { cartContext } from "./cartContext";
import { useContext, useState } from "react";
import { userLoginContext } from "./userLoginContext";
import { toast } from "react-hot-toast";

function CartStore({children}){

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

    async function addToCart(productObj) {
        try {
            // let res = await fetch(`http://localhost:4000/user-api/add-to-cart/${currentUser.username}`, {
            let res = await fetch(`https://ecommerce-backend-fswd.vercel.app/user-api/add-to-cart/${currentUser.username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({ product: productObj })
            });
            res = await res.json();
            // console.log('res: ', res);
            // Notify user of successful addition
            toast.success('Product added to cart', {
                style: {
                    marginTop: '-10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#333',
                },
                icon: '🛒',
            });
            setCartItems([...cartItems, productObj]);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            toast.error('Error adding product to cart', {
                style: {
                    marginTop: '-10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#333',
                },
                icon: '🚫',
            });
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
          setCartItems(cartItems.filter((product) => product.id !== productId));  
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



    return (
        <cartContext.Provider value={{cartItems,getCartProductsofUserCart,addToCart,removeFromCart}}>
            {children}
        </cartContext.Provider>
    )

}
export default CartStore;

