import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/Cart.jsx'
import { ToastWrapper } from 'keep-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
                <App />
                <ToastWrapper />
        </CartProvider>
    </React.StrictMode>,
)
