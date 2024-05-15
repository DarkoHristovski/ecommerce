import { useState, useEffect } from 'react';

import {getAllProducts} from '../../services/fetchServices';
import ProductsList from '../Products/ProductsList'

import './products.css'

const Products = () =>{

    const [products, setProducts] = useState<[]>([])

    useEffect(()=>{
        getAllProducts()
        .then(results => setProducts(results.products))
    },[])

    return(
        <div className='display-grid grid-4-columns'>
        {products.map((x,i)=><ProductsList key={i} products={x}/>)}
        </div>
    )
}

export default Products