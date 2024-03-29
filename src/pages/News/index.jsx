import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { HeadThree } from "../../components/Search/components/HeadThree";

export const NewsPage = () => {
  return (
    <section>
      <div className="container">
        <HeadThree />
        <h2 className="title-section news-title">Novedades</h2>
        <Swiper
          className="news-slider"
          spaceBetween={10}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
          }}
          loop
        >
          <SwiperSlide>
            <img src="/image/news1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/news2.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
