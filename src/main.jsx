import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="max-w-screen-xl">
   <React.StrictMode>
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  </React.StrictMode>
 </div>,
)
