import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route.jsx'
import AuthProvider from './Route/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <Toaster></Toaster>
   </AuthProvider>
  </React.StrictMode>,
)
