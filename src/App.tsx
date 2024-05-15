
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Categories from './components/Categories/Categories'
import CategoryProducts from './components/Categories/CategoryProducts'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import ProductsDetails from './components/Products/ProductsDetails'

function App() {
 

  return (
    <>
   <Header/>
   <main>
   <div className="container">
    <div className="wrapper">      
    <Routes>
    <Route path='/categories' element={<Categories/>}  />
    <Route path='/categories/:cat' element={<CategoryProducts/>}  />
    <Route path='/products' element={<Products/>}  />
    <Route path='/products/:id' element={<ProductsDetails/>}  />
    </Routes>
    </div>  
    </div>
   </main>
      
    </>
  )
}

export default App
