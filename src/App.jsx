import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { ProductList } from './Pages/ProductList'
import { CartItem } from './Pages/CartItem'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: "/productlist",
      element: <ProductList />
    },
    {
      path: "/cartitem",
      element : <CartItem/>
    }
  ])

  return (
    <>

      <Header />
      <RouterProvider router={router} />
      {/* <CartItem /> */}
      {/* <ProductList/> */}
      {/* <Product /> */}
      {/* <Home/> */}
      <Footer />
    </>
  )
}

export default App
