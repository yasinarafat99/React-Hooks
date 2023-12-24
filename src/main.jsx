import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
// router is provider, NAM Atai dite Hobe
<React.StrictMode> 
   <ToastContainer/>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
