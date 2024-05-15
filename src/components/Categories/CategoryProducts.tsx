
import { useEffect, useState } from 'react'
import {getCategoriesProducts} from '../../services/fetchServices'
import { useParams } from 'react-router-dom';
import CategoryProductsList from './CategoryProductsList';




const CategoryProducts = () =>{
    const [categoryProduct, setCategoryProduct]= useState<[]>([]);
    const {cat} = useParams();
    console.log(cat)
    useEffect(()=>{
        getCategoriesProducts(cat)
        .then(results => setCategoryProduct(results.products))
    },[])
 


    return <div className='display-grid grid-4-columns'>
   {categoryProduct.map((products:[],i) => <CategoryProductsList key={i} products={products} />)}
    </div>
}

export default CategoryProducts