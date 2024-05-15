import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import './products.css'

type ProductsListProps = {

  products: [id: string, title: string, description: string];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <Card key={products.id}>
      <Link className="card-link" to={`/products/${products.id}`}>
        <div className="img-wrapper"><img src={products.thumbnail} alt="" /></div>
       <div className="card-details">
        <p className="product-category">{products.category}</p>
        <h3 className="product-tittle">{products.title}</h3>
        <p className="product-rating">Rating: {products.rating}/5</p>
        <p className="product-price">$ <span>{products.price}</span></p>
       </div>
      </Link>
    </Card>
  );
};

export default ProductsList;
