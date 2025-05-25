"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SlideDeck = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={`${className} swiper-container`}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        simulateTouch={true}
        allowTouchMove={true}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={true}
        shortSwipes={false}
        onTouchEnd={(swiper) => {
          swiper.allowTouchMove = true;
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              alt={title}
              height={800}
              width={1-24}
              src={`/products/${image}`}
              className="rounded-lg object-fill"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};