import React, { Children } from 'react'
import Layout from './Components/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import About from './Components/about/About'
import RoutingError from './Components/RoutingError'
import UserProfile from './Components/user-profile/UserProfile'
import Cart from './Components/cart/Cart'

function App() {

  // Browser Router

  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <RoutingError/>,
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
          element:<About/>
        },
        {
          path:"user-profile",
          element:<UserProfile/>
        },
        {
          path:"cart",
          element:<Cart/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}

export default App