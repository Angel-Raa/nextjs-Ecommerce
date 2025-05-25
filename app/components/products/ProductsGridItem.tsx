"use client";
import { Products } from "@/interfaces/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: Products;
}

export const ProductsGridItem = ({ product }: Props) => {
    const { images, price, slug, title } = product;
    const [displayImage, setDisplayImage] = useState(images[0]);

    
    return (
        <div className="fade-in rounded-lg overflow-hidden shadow-md bg-white transition-transform hover:scale-105 duration-300 flex flex-col">
            <Link href={`/product/${slug}`} className="block w-full">
                <div className="relative w-full aspect-square bg-gray-100">
                    <Image
                        src={`/products/${displayImage}`}
                        alt={title}
                        className="object-cover w-full h-full transition-opacity duration-300"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                    />
                </div>
            </Link>

            {/* Miniaturas de imágenes */}
            {images.length > 1 && (
                <div className="flex gap-2 px-4 py-2 justify-center">
                    {images.map((img, idx) => (
                        <button
                            key={img}
                            className={`border rounded-md overflow-hidden focus:outline-none transition-all ${
                                displayImage === img
                                    ? "border-black ring-2 ring-black"
                                    : "border-gray-200"
                            }`}
                            onMouseEnter={() => setDisplayImage(img)}
                            onFocus={() => setDisplayImage(img)}
                            tabIndex={0}
                            type="button"
                            aria-label={`Ver imagen ${idx + 1}`}
                        >
                            <Image
                                src={`/products/${img}`}
                                alt={`${title} miniatura ${idx + 1}`}
                                width={48}
                                height={48}
                                className="object-cover w-12 h-12"
                            />
                        </button>
                    ))}
                </div>
            )}

            <div className="p-4 flex flex-col items-center">
                <Link
                    className="hover:text-gray-900 text-lg font-semibold text-center transition-colors duration-200"
                    href={`/product/${slug}`}
                >
                    {title}
                </Link>
                <span className="font-bold text-xl text-gray-800 mt-2">${price}</span>
            </div>
        </div>
    );
};
