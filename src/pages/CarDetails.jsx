// import react hooks
import { useEffect, useState } from "react";

// import useParams
import { useParams } from "react-router-dom";

// import axios
import axios from "axios";

const CarDetails = () => {
  const {carID} = useParams();
  const [product, setProduct] = useState({});

  const getSingleData = async () => {
    await axios.get(`${process.env.REACT_APP_SINGLE_PRODUCT}/${carID}`).then((res)=>setProduct(res.data));
  }

  useEffect(()=>{
    getSingleData();
  }, []);

  return (
    <section className="carDetails">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <img src={`${process.env.REACT_APP_IMAGE}/${product.productImage}`} alt={product.name} />
          </div>
          <div className="rightSide">
            <h2 className="carTitle">{product.name}</h2>
            <p className="carDetails">{product.details}</p>
            <p className="carPrice">$ {product.price}</p>
            <button className="addBtn">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
