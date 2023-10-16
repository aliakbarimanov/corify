// Images
import { Link } from "react-router-dom";

// Images
import heroBg from "../../assets/images/bmw.png";
import cysler from "../../assets/images/cysler.png"

// React icons
import { SlSpeedometer } from "react-icons/sl";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="row">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero">
              <div className="heroImg">
                <img src={heroBg} alt="bmw" />
              </div>
              <div className="heroInfo">
                <p className="slideInfo">LIMITED EDITION</p>
                <h2 className="slideTitle">BMW X6</h2>
                <p className="slideDetails">
                  Cayman <span>S</span>
                </p>
                <p className="price">
                  $225 <span>/</span> <span>Month</span>
                </p>
                <p className="priceDetails">
                  $0 first payment paid by Bmw up to $225.
                </p>
                <p className="priceDetails">Taxes, title and fees extra. </p>
                <div className="btns">
                  <Link className="primaryBtn" to="#">
                    LEARN MORE
                  </Link>
                  <Link className="secondaryBtn" to="#">
                    <SlSpeedometer /> TEST DRIVE
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
              <div className="heroImg">
                <img src={cysler} alt="cysler" />
              </div>
              <div className="heroInfo">
                <p className="slideInfo">SPECIAL EDITION</p>
                <h2 className="slideTitle">cysler</h2>
                <p className="slideDetails">
                  Z <span>5</span>
                </p>
                <p className="price">
                  $225 <span>/</span> <span>Month</span>
                </p>
                <p className="priceDetails">
                  $0 first payment paid by Bmw up to $225.
                </p>
                <p className="priceDetails">Taxes, title and fees extra. </p>
                <div className="btns">
                  <Link className="primaryBtn" to="#">
                    LEARN MORE
                  </Link>
                  <Link className="secondaryBtn" to="#">
                    <SlSpeedometer /> TEST DRIVE
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
