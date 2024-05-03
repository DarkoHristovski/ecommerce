import CategoryProducts from "./CategoryProducts"

interface CategoriesListsProps{
    products:[title:string]
}


const CategoryProductsList = ({products}:CategoriesListsProps) =>{
   


    return <>
    <img src={products.thumbnail} alt="" />
    <div>{products.title}</div>
    </>
}

export default CategoryProductsList