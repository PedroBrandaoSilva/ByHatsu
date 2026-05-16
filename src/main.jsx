import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../GlobalStyles'
import Home from './containers/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './containers/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'produtos',
    element: <Products />
  },
  {
    path: '*',
    element: <h1 style={{ textAlign: 'center', fontSize: '3rem'}}>Not Found</h1>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
