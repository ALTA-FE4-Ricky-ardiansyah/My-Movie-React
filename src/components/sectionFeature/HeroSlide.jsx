import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/HeroSlide.css";

export default function HeroSlide() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
            }}
            src="/img/slider/uncharted.jpg"
            alt="gambar"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
