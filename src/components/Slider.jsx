import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  FreeMode,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import "../components/menu/menu.css";
function Slider({ data, renderItem }) {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Mousewheel]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
