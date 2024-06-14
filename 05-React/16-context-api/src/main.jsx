import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import Store from './Contexts/Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
)
