import React from 'react'
import Layout from './Components/Layout'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import About from './Components/about/About'
import RoutingError from './Components/RoutingError'
import UserProfile from './Components/user-profile/UserProfile'
import Cart from './Components/cart/Cart'
import Products from './Components/products/Products'
import EditUser from './Components/edit-user/EditUser'
import { Toaster } from 'react-hot-toast';


function App() {

  // Browser Router

  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "user-profile",
          element: <UserProfile />,
          children: [
            {
              path: "products",
              element: <Products />
            },
            {
              path: "cart",
              element: <Cart />
            },
            {
              path: "",
              element: <Navigate to={'products'} />
            },
          ]
        },
        {
          path: "edit-user",
          element: <EditUser />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={browserRouter} />
      <div><Toaster
        position="top-center"
        reverseOrder={false}
      /></div>
    </div>
  )
}

export default App
