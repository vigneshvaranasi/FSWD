import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserLoginStore from './Contexts/UserLoginStore.jsx'
import CartStore from './Contexts/CartStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserLoginStore>
      <CartStore>
        <App />
      </CartStore>
    </UserLoginStore>
  </React.StrictMode>
)
