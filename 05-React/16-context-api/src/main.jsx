import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import Store from './Contexts/Store'
import UsersStore from './Contexts/usersStore'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersStore>
      <Store>
        <App />
      </Store>
    </UsersStore>
  </React.StrictMode>,
)
