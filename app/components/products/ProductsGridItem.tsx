"use client"
import type { Products } from "@/interfaces/products"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface Props {
  product: Products
  index?: number
}

export const ProductsGridItem = ({ product, index = 0 }: Props) => {
  const { images, price, slug, title } = product
  const [displayImage, setDisplayImage] = useState(images[0])
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Product Link */}
      <Link href={`/product/${slug}`} className="block relative">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          <Image
            src={`/products/${displayImage}`}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={index < 4}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />

          {/* Quick View Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button className="bg-white/90 backdrop-blur-sm text-black p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl font-light text-gray-900 mb-2 tracking-wide leading-tight group-hover:text-black transition-colors duration-200">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-xl lg:text-2xl font-light text-gray-900 tracking-wide">
              ${price.toLocaleString()}
            </span>

            {/* Price Change Indicator (if needed) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-gray-500 font-light">Starting at</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Image Thumbnails */}
      {images.length > 1 && (
        <div className="px-6 pb-6 lg:px-8 lg:pb-8">
          <div className="flex gap-2 justify-center">
            {images.slice(0, 4).map((img, idx) => (
              <button
                key={img}
                className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden transition-all duration-200 ${
                  displayImage === img
                    ? "ring-2 ring-black ring-offset-2 scale-110"
                    : "ring-1 ring-gray-200 hover:ring-gray-400 hover:scale-105"
                }`}
                onMouseEnter={() => setDisplayImage(img)}
                onFocus={() => setDisplayImage(img)}
                tabIndex={0}
                type="button"
                aria-label={`View image ${idx + 1} of ${title}`}
              >
                <Image
                  src={`/products/${img}`}
                  alt={`${title} variant ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}

            {images.length > 4 && (
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-light">
                +{images.length - 4}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Action Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 transform transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 font-light">Learn More</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
