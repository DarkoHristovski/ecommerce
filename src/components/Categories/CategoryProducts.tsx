
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
 


    return <>
   {categoryProduct.map((products:[],i) => <CategoryProductsList key={i} products={products} />)}
    </>
}

export default CategoryProducts