import { QuantityStepper, SizeTab, SlideDeck } from "@/app/components";
import { initialData } from "@/app/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}
const productos = initialData.products;
function getProductBySlug(slug: string) {
    return productos.find((product) => product.slug === slug);
}
export default async function Product({ params }: Props) {
    const { slug } = params;
    const product = getProductBySlug(slug);
    if (!product) return notFound();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen font-sans">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Slideshow */}
                <div className="md:w-2/3 w-full flex items-center justify-center bg-[#f7f7f7] rounded-2xl h-80 md:h-[36rem] shadow-sm border border-[#ececec]">
                    <SlideDeck images={product.images} title={product.title} />
                </div>

                {/* Details */}
                <div className="md:w-1/3 w-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-light mb-4 text-[#171a20] tracking-tight leading-tight">
                            {product.title}
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium mb-10 text-[#171a20]">
                            ${product.price}
                        </p>
                        {/* Selector de Tallas */}
                        <div className="mb-8">
                            <SizeTab
                                availableSizes={product.sizes}
                                selectSize={product.sizes[0]}
                            />
                        </div>
                        {/* Selector de Cantidad */}
                        <div className="mb-8">
                            <QuantityStepper quantity={2} />
                        </div>
                        <button className="w-full bg-[#171a20] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#22262b] transition-colors duration-200 shadow-none tracking-widest uppercase mb-10">
                            Agregar al carrito
                        </button>
                        <h3 className="font-semibold text-base mb-2 text-[#171a20] tracking-wide">
                            Descripción
                        </h3>
                        <p className="text-[#5c5e62] text-base leading-relaxed font-light">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
            {/* Mobile: sticky add to cart */}
            <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-[#ececec] px-4 py-3 flex items-center justify-between z-20 shadow-[0_-2px_16px_0_rgba(0,0,0,0.04)]">
                <span className="font-semibold text-lg text-[#171a20]">
                    ${product.price}
                </span>
                <button className="bg-[#171a20] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#22262b] transition-colors duration-200 shadow-none tracking-widest uppercase">
                    Agregar al carrito
                </button>
            </div>
            
        </div>
    );
}
