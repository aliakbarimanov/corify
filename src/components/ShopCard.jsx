// Router
import { Link } from "react-router-dom";

const ShopCard = ({ data }) => {

  return (
    <div className="shopCard">
      <div className="cardImg">
        <img src={`${process.env.REACT_APP_IMAGE}/${data.productImage}`} alt={data.name} />
      </div>
      <div className="carInfo">
        <Link className="carTitle" to={`/car-details/${data.id}`}>
          {data.name}
        </Link>
        <p className="carDetails">{data.details}</p>
        <p className="carPrice">$ {data.price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
