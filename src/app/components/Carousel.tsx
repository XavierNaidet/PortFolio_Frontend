"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  children: React.ReactNode | React.ReactNode[]; // Accepts single or multiple child components
}

const Carousel: React.FC<CarouselProps> = ({ children }: CarouselProps) => {
  // Convert each child into a SwiperSlide
  const slides = React.Children.map(children, (child) => (
    <SwiperSlide>
      {child}
    </SwiperSlide>
  ));
  
  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation={true}
      pagination={{ dynamicBullets: true }}
      spaceBetween={0}
      slidesPerView={1.2}
      coverflowEffect={{
        rotate: 45,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        1024: { spaceBetween: 50, slidesPerView: 3, },
      }}
      className="h-5/6"
    >
      {/* Render dynamically wrapped slides */}
      {slides}
    </Swiper>
  );
};

export { Carousel };
