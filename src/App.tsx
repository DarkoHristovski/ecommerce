
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Categories from './components/Categories/Categories'
import CategoryProducts from './components/Categories/CategoryProducts'

function App() {
 

  return (
    <>

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
