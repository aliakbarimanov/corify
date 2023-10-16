// Fake DB
import carsDb from "../../db/carsDb";

// Components
import CarCard from "../../components/CarCard";

// useState
import {useState, useEffect} from "react";

const OurCars = () => {
  const [category, setCategory] = useState([]);

  useEffect(()=>{
    let allCategories = carsDb.map((item)=>item.category);
    let categories = new Set(allCategories);
    setCategory([...categories]);
  },[]);

  console.log(category);

  return (
    <section className="ourCarsSection">
      <div className="container">
        <div className="row">
          <div className="ourCarsHead">
            <h2>OUR CARS</h2>
            <ul className="categoryList">
              <li className="categoryItem active">All</li>

              {
                category.map((item, index)=>(
                  <li className="categoryItem" key={index}>{item}</li>
                ))
              }

            </ul>
          </div>
          <div className="carsBox">
            {carsDb.map((item) => (
              <CarCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCars;
