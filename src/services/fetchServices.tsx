const url:string = 'https://dummyjson.com/products'

export const getCategories = async () =>{

    const getCat:string = await fetch(`${url}/categories`)
    .then(res=>res.json());

    return getCat;
}

export const getCategoriesProducts = async (product:string) =>{

    const getCatProducts = await fetch(`${url}/category/${product}`)
    .then(res=>res.json())

    return getCatProducts

}

export const getAllProducts = async () =>{
    const getAllProd = await fetch(url)
    .then(res=> res.json())
    return getAllProd

}

export const getProductDetails = async (id:string) =>{
    const productDetails = await fetch(`${url}/${id}`)
    .then(res=> res.json())

    return productDetails
}