import Categories from "./Categories"
import { Link } from "react-router-dom";

interface CategoriesListsProps{
    cat:[];
}

const CategoriesLists = ({cat}:CategoriesListsProps) =>{
    return(
        <div>
    <Link to={`/categories/${cat}`}>
      <p>{cat}</p>
      </Link>
       </div>
    )
}

export default CategoriesLists