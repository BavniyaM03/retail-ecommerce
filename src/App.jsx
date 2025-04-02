import './App.css'
import { Footer } from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ProductCard from './Components/ProductCard'
import { Home } from './Pages/Home'
import { Product } from './Pages/Product'

function App() {

  return (
    <>
    
    <Header/>
    <Product/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
