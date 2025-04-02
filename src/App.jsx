import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ProductCard from './Components/ProductCard'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'
import { ProductList } from './Pages/ProductList'

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
      path : "/productlist",
      element : <ProductList/>
    }
  ])

  return (
    <>

      <Header />
      <RouterProvider router={router} />
      {/* <ProductList/> */}
      {/* <Product /> */}
      {/* <Home/> */}
      <Footer />
    </>
  )
}

export default App
