import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '../GlobalStyles'
import Home from './containers/Home'
import Products from './containers/Products'
import NewProducts from './containers/NewProducts'
import Feedback from './containers/Feedback'
import Faq from './containers/Faq'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    path: 'new',
    element: <NewProducts />
  },
  {
    path: 'feedback',
    element: <Feedback />
  },
  {
    path: 'faq',
    element: <Faq />
  },
  {
    path: '*',
    element: <h1 style={{ color: '#fff', textAlign: 'center', fontSize: '3rem' }}>Not Found</h1>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
