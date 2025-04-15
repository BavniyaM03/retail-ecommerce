import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { ProductList } from './Pages/ProductList'
import { CartItem } from './Pages/CartItem'
import { WishlistItem } from './Pages/WishlistItem'
import { Layout } from './components/layout/Layout'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product/:id',
          element: <Product />
        },
        {
          path: "/productlist/:category",
          element: <ProductList />
        },
        {
          path: "/cartitem",
          element: <CartItem />
        },
        {
          path: "/wishlist",
          element: <WishlistItem />
        }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
