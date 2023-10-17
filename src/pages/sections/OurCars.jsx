// Fake DB
import carsDb from "../../db/carsDb";

// Components
import CarCard from "../../components/CarCard";

// useState
import { useState, useEffect } from "react";

const OurCars = () => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    const allCategories = carsDb.map((item) => item.category);
    const categories = new Set(allCategories);
    setCategory([...categories]);
  }, []);



  return (
    <section className="ourCarsSection">
      <div className="container">
        <div className="row">
          <div className="ourCarsHead">
            <h2>OUR CARS</h2>
            <ul className="categoryList">
              <li className={`categoryItem ${active==="all" && "active"}`} onClick={setActive("all")}>All</li>

              {category.map((item, index) => (
                <li className={`categoryItem ${active===category && "active"}`} key={index} onClick={()=>{setActive(item)}}>
                  {item}
                </li>
              ))}
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
