import { useEffect } from "react";
import { Hero } from "../../components/Hero";
import data from "../../data/products.json";
import "./style.scss";
import { BasketStore } from "../../Store/BasketStore";
import { useState } from "react";
import { Welcome } from "../../components/Welcome";
import { WelcomeStore } from "../../Store/WelcomeStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const sliderData = [data[1], data[9], data[5], data[7]];
  const sliderDataNew = [data[2], data[4], data[6], data[8]];
  const [welcome, hasWelcome] = useState(WelcomeStore.get() || false);
  useEffect(() => {
    setTimeout(() => {
      hasWelcome(true);
      WelcomeStore.set(true);
    }, 1200);
  }, []);
  return !welcome ? (
    <Welcome />
  ) : (
    <div>
      <Hero />

      <div className="best-block">
        <h3 className="best-title">los más vendidos</h3>
        <ul className="product-slider list-reset">
          <Swiper
            spaceBetween={20}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
          >
            {sliderData.map((el) => (
              <SwiperSlide key={Math.random()} className="list-slide">
                <li key={el.id}>
                  <div className="img-box">
                    <Link to={el.title} state={el}>
                      <img src={`/image/${el.img}`} alt="rr" />
                    </Link>
                  </div>
                  <span className="title">{el.title}</span>
                  <span className="subtitle">{el.subDescr}</span>
                  <span className="newprice"> $ {el.price}</span>
                  <button
                    className="btn-reset"
                    onClick={() => BasketStore.add(el)}
                  >
                    AGREGAR
                  </button>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
      <div className="new-block">
        <h3 className="new-title">lo nuevo</h3>
        <ul className="product-slider list-reset">
          <Swiper
            spaceBetween={20}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            autoplay={{
              delay: 1800,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
          >
            {sliderDataNew.map((el) => (
              <SwiperSlide key={Math.random()} className="list-slide">
                <li key={el.id}>
                  <div className="img-box">
                    <Link to={el.title} state={el}>
                      <img src={`/image/${el.img}`} alt="rr" />
                    </Link>
                  </div>
                  <span className="title">{el.title}</span>
                  <span className="subtitle">{el.subDescr}</span>
                  <span className="newprice">$ {el.price} </span>
                  <button
                    className="btn-reset"
                    onClick={() => BasketStore.add(el)}
                  >
                    AGREGAR
                  </button>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};
