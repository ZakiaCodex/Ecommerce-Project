import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules from 'swiper/modules'
import { Navigation, Pagination } from "swiper/modules";

import s1 from "../assets/s1.jpg";
import s4 from "../assets/s4.png";

export default function SliderComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <img src={s4} alt="Slide 1" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s1} alt="Slide 1" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s4} alt="Slide 2" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={s4} alt="Slide 2" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
}
