import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Autoplay } from "swiper/modules";

export default function ImageSlider() {
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  return (
    <div className="w-full h-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={img}
                layout="fill"
                alt={`image ${index + 1}`}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
