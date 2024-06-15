import React, { Children } from 'react'
import Layout from './Components/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import About from './Components/about/About'
import RoutingError from './Components/RoutingError'

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