"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  images: string[];
  projectName: string;
}

export default function Carousel({ images, projectName }: CarouselProps) {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation={true}
      pagination={{ dynamicBullets: true }}
      effect="coverflow"
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 45,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        700: { spaceBetween: 0, slidesPerView: 4 },
        500: { spaceBetween: 100, slidesPerView: 2 },
        300: { spaceBetween: 0, slidesPerView: 1 },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`${projectName} image ${index + 1}`}
            loading="lazy"
            className="bg-center bg-cover flex justify-center items-center w-auto h-[300px] mr-0"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
