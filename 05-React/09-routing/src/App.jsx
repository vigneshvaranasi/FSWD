import { Children } from 'react';
import Layout from './Layout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App(){

  //  Create Browser Router object
  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>

      }]
    },

  ]);
  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}
export default App;