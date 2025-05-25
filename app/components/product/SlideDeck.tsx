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

export const SlideDeck: React.FC<Props> = ({
  images,
  title,
  className,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject | null>(null);

  return (
    <div
      className={`w-full flex flex-col gap-4 ${className}`}
    >
      {/* Swiper principal */}
      <div className="w-full flex items-center justify-center">
        <div className="aspect-square w-full max-w-[480px] bg-[#fafbfc] rounded-2xl flex items-center justify-center relative overflow-hidden">
          <Swiper
            spaceBetween={0}
            navigation
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center w-full h-full p-6 md:p-10">
                  <Image
                    alt={`${title} image ${idx + 1}`}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                    src={`/products/${src}`}
                    style={{
                      background: "transparent",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="w-full flex justify-center mt-6">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={24}
          slidesPerView={Math.min(images.length, 5)}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className="w-full max-w-[520px]"
          style={{ minHeight: 104 }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="flex items-center justify-center h-24 w-24 bg-white rounded-xl border border-[#ececec] hover:border-[#171a20] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <Image
                  alt={`${title} thumbnail ${idx + 1}`}
                  width={96}
                  height={96}
                  className="object-contain rounded-xl"
                  src={`/products/${src}`}
                  style={{
                    background: "#fff",
                    borderRadius: "0.75rem",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper {
          max-width: 100%;
        }
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #171a20;
          background: rgba(255,255,255,0.92);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
          border: 1px solid #ececec;
          transition: background 0.2s, border 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #ececec;
          border: 1px solid #171a20;
        }
        .swiper-button-disabled {
          opacity: 0.3;
        }
        @media (max-width: 768px) {
          .aspect-square {
            max-width: 90vw !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 28px;
            height: 28px;
          }
          .swiper-slide > div {
            height: 72px !important;
            width: 72px !important;
          }
        }
      `}</style>
    </div>
  );
};
