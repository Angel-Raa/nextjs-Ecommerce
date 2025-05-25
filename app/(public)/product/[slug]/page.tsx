import { QuantityStepper, SizeTab } from "@/app/components";
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
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Slideshow */}
                <div className="md:w-2/3 w-full flex items-center justify-center bg-gray-100 rounded-lg h-64 md:h-auto">
                    {/* Aquí iría el slideshow real */}
                    <span className="text-gray-400 text-2xl">Slideshow</span>
                </div>

                {/* Details */}
                <div className="md:w-1/3 w-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.title}</h1>
                        <p className="text-lg md:text-xl font-medium mb-6 text-gray-800">${product.price}</p>
                        {/* Selector de Tallas */}
                        <SizeTab availableSizes={product.sizes} selectSize={product.sizes[0]}/>
                        {/* Selector de Cantidad */}
                        <QuantityStepper />
                        <button className="w-full bg-black text-white py-3 rounded-md font-semibold text-lg hover:bg-gray-900 transition mb-6">
                            Agregar al carrito
                        </button>
                        <h3 className="font-semibold text-base mb-1">Descripción</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
