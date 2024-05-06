
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Categories from './components/Categories/Categories'
import CategoryProducts from './components/Categories/CategoryProducts'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
   <Header/>
   <main>
    <Routes>
    <Route path='/categories' element={<Categories/>}  />
    <Route path='/categories/:cat' element={<CategoryProducts/>}  />
    </Routes>
   </main>
      
    </>
  )
}

export default App
