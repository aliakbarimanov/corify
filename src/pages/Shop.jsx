// import axios
import axios from "axios";

// import useState
import { useEffect, useState } from "react";

// import ShopCard
import ShopCard from "../components/ShopCard";

const Shop = () => {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getAllData = async () => {
  //     await axios.get("http://localhost:5000/api/products")
  //                .then((res) => {
  //                  setData(res.data);
  //                  console.log(res);
  //                 });
  //   }
  // }, []);

  useEffect(()=>{
    getAllData();
  }, []);

  const getAllData = async () => {
    await axios.get("http://localhost:5000/api/products").then(res=>{
      setData(res.data);
    });
  }

  return (
    <section className="shop">
      {/* {loading && <Loader />} */}
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">
            <ShopCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
