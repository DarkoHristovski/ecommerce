import { useEffect, useState } from "react";
import { getCategories }  from '../../services/fetchServices';
import CategoriesLists from './CategoriesLists'



const Categories = () =>{
    const[categories, setCategories]= useState([])
    
useEffect(()=>{
    getCategories().then(results=>setCategories(results))
},[])

    return <section className="display-grid grid-4-columns w-full">
    {categories.map((cat,i) => <CategoriesLists key={i} cat={cat} /> )}
    </section>
}

export default Categories