import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as services from "../../services/fetchServices";
import {realPrice} from "../../services/realPriceServices"
import './products.css'

const ProductsDetails = () => {
  const [details, setDetails] = useState([]);
  const [clickedImg, setClickedImg] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null)



  const selectedImg = (img:string, index:number) =>{
    setClickedImg((state:[]) =>[img, ...state ]);
    setActiveIndex(index)
  
  }


  const { id } = useParams();

  useEffect(() => {
    services.getProductDetails(id).then((results) => setDetails(results));
  }, [id]);


 
  return (
    <div className="display-flex" key={id}>
     <div className="images">
     <div className="img-section">

      
     {  clickedImg < 1 ?  <img src={details?.thumbnail} alt="" /> :  <img src={clickedImg[0]} alt="" />}
      
       
      </div>
      <div className="small-images">
      {details.images?.map((x,i)=> {
        return(
           <div key={i}  className={`img-wrapper ${i === activeIndex ? 'active-image' : ''}`}  onClick={()=>selectedImg(x, i)} >
           <img  src={x} alt="profuct-image" />
      </div>
        )
      })}
       </div>
     </div>
      <div className="text-section">
      <p>{details.brand}</p>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
        <p>${details.price}</p>
        <p>{details.discountPercentage}%</p>
        <p>${realPrice(details.price,details.discountPercentage).toFixed(2)} </p>
      </div>
    </div>
  );
};

export default ProductsDetails;
