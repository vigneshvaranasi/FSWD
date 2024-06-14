import { Children } from 'react';
import Layout from './Components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Users from './Components/Users';
import Technologies from './Components/Technologies';
import Vue from './Components/Tech/Vue';
import Nodejs from './Components/Tech/Nodejs';
import Java from './Components/Tech/Java';

function App() {

  //  Create Browser Router object
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'technologies',
          element: <Technologies />,
          children: [
            { 
              path: 'java',
              element:<Java/>
            },
            { 
              path: 'vue',
              element:<Vue/>
            },
            { 
              path: 'nodejs',
              element:<Nodejs/>
            }
          ]
        }
      ]
    },

  ]);
  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}
export default App;