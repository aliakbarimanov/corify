// import axios
import axios from "axios";

// import useState
import { useEffect, useState } from "react";

// import ShopCard
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    await axios.get(process.env.REACT_APP_PRODUCTS).then((res)=>setData(res.data));
  }

  useEffect(()=>{
    getAllData();
  }, []);

  return (
    <section className="shop">
      {/* {loading && <Loader />} */}
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">
            {
              data.map((item)=>(
                <ShopCard data={item} key={item.id}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
