import { Children } from 'react';
import Layout from './Layout'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './Users'; 
import Home from './Home';
import UserDetails from './userDetails'; 

function App() {
  // Create Browser Router object
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
          path: 'users/:userId',
          element: <UserDetails />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  );
}

export default App;
