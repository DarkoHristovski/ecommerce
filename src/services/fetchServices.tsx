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