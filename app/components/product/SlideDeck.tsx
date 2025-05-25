"use client"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperObject } from "swiper"
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: string[]
  title: string
  className?: string
}

export const SlideDeck: React.FC<Props> = ({
  images,
  title,
  className,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={`w-full ${className}`}>
      {/* Main Image Display */}
      <div className="relative w-full mb-8">
        <div className="aspect-square w-full max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <Swiper
            spaceBetween={0}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="w-full h-full group"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-12">
                  <Image
                    alt={`${title} - Image ${idx + 1}`}
                    fill
                    className="object-contain transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx === 0}
                    src={`/products/${src}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="w-full">
          <div className="max-w-2xl mx-auto">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView="auto"
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="thumbnail-swiper"
              breakpoints={{
                320: {
                  spaceBetween: 8,
                },
                640: {
                  spaceBetween: 12,
                },
                1024: {
                  spaceBetween: 16,
                },
              }}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="!w-auto">
                  <button
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === idx
                        ? 'border-black shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-400 hover:scale-102'
                    }`}
                  >
                    <Image
                      alt={`${title} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                      src={`/products/${src}`}
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                    {/* Overlay for inactive thumbnails */}
                    <div
                      className={`absolute inset-0 bg-white transition-opacity duration-300 ${
                        activeIndex === idx ? 'opacity-0' : 'opacity-20'
                      }`}
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center mt-6 sm:hidden">
            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-black w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    if (thumbsSwiper) {
                      thumbsSwiper.slideTo(idx)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        .thumbnail-swiper {
          padding: 4px 0;
        }
        
        .thumbnail-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }
        
        .thumbnail-swiper .swiper-slide:hover {
          transform: translateY(-2px);
        }

        /* Hide default Swiper navigation */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        /* Smooth transitions for all elements */
        .swiper-slide img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }
          
          .swiper-button-prev-custom {
            left: 8px;
          }
          
          .swiper-button-next-custom {
            right: 8px;
          }
        }

        /* Accessibility improvements */
        .swiper-button-prev-custom:focus,
        .swiper-button-next-custom:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
