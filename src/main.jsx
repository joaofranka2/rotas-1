import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import home from './routes/home/index.jsx'
import produtos from './routes/produtos/index.jsx'
import error from './routes/error/index.jsx'
import EditarProduto from './routes/EditarProduto/index.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <error/>,
    children:[
      {
        path: "/",
        element: <home/>
      },
      {
        path: "/produtos",
        element: <produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)