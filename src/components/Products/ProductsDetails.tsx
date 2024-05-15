import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as services from "../../services/fetchServices";
import './products.css'

const ProductsDetails = () => {
  const [details, setDetails] = useState([]);
  const [clickedImg, setClickedImg] = useState([]);


  const selectedImg = (img:string) =>{
    setClickedImg((state:[]) =>[img, ...state ])}

  const { id } = useParams();

  useEffect(() => {
    services.getProductDetails(id).then((results) => setDetails(results));
  }, [id]);

  console.log(clickedImg[0])
  return (
    <div className="display-flex" key={id}>
     <div className="images">
     <div className="img-section">

      
     {  clickedImg < 1 ?  <img src={details?.thumbnail} alt="" /> :  <img src={clickedImg[0]} alt="" />}
      
       
      </div>
      <div className="small-images">
      {details.images?.map((x,i)=> {
        return(
           <div key={i} className="img-wrapper" >
           <img  src={x} alt="" onClick={()=>selectedImg(x)} />
      </div>
        )
      })}
       </div>
     </div>
      <div className="text-section">
        <h2>{details.title}</h2>
      </div>
    </div>
  );
};

export default ProductsDetails;
