"use client";

import { Swiper } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }: CarouselProps) => {
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
      {/* Insère les enfants (contenu dynamique) dans le carousel */}
      {children}
    </Swiper>
  );
};

export { Carousel };
