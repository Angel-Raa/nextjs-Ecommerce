'use client'
import Image from "next/image";
import Link from "next/link";

export default function CategoryNotFound() {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <Image
                src="/imgs/starman_750x750.png"
                alt="Página no encontrada"
                className="mx-auto w-40 h-40 object-contain"
                width={550}
                height={550}
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Categoría no encontrada</h1>
            <p className="text-lg text-gray-600 mb-6">
                La categoría que buscas no existe o ha sido eliminada.
            </p>
            <Link
                href="/"
                className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition-colors duration-200 uppercase tracking-wide"
            >
                Volver al inicio
            </Link>
        </div>
    );
}