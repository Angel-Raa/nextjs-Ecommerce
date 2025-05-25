"use client";
import { QuantityStepper } from "@/app/components";
import { initialData } from "@/app/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
];

export default function ShoppingCart() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-[#fff] px-2 sm:px-0">
      <div className="w-full max-w-7xl py-12">
        <h1 className="text-3xl font-semibold text-[#171a20] mb-10 px-2 md:px-0">
          Carrito
        </h1>
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          {/* Carrito */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-8">
              {productInCart.map((product) => (
                <div
                  key={product.slug}
                  className="flex flex-row items-center gap-6 py-6 border-b border-[#ececec] last:border-b-0"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-lg object-contain bg-[#fafbfc] border border-[#ececec]"
                      width={96}
                      height={96}
                      alt={product.title}
                      src={`/products/${product.images[0]}`}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <p className="text-base md:text-lg font-medium text-[#171a20] truncate mb-1">
                      {product.title}
                    </p>
                    <p className="text-sm text-[#5c5e62] mb-1 font-light">
                      Talla: {product.sizes[1]}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-base text-[#171a20] font-medium">
                        ${product.price}
                      </span>
                      <QuantityStepper quantity={3} />
                      <button className="text-xs text-[#5c5e62] hover:text-red-600 underline transition-colors">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 px-2 md:px-0">
              <Link
                href="/"
                className="text-sm text-[#5c5e62] hover:text-[#171a20] underline transition-colors"
              >
                Seguir comprando
              </Link>
            </div>
          </div>

          {/* Checkout */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[#ececec] shadow-[0_2px_24px_0_rgba(0,0,0,0.08)] p-8 md:mt-0 mt-8">
              <h2 className="text-xl font-semibold text-[#171a20] mb-6">
                Resumen del pedido{" "}
              </h2>
              <div className="flex justify-between items-center text-base text-[#171a20] mb-3">
                <span>Envío</span>
                <span className="text-[#5c5e62] font-normal">Gratis</span>
              </div>
              <div className="flex justify-between items-center text-base text-[#171a20] mb-3">
                <span>
                  Impuesto sobre las ventas{" "}
                  <span
                    className="text-[#bdbdbd] cursor-pointer"
                    title="Calculated at checkout"
                  >
                    ⓘ
                  </span>
                </span>
                <span className="text-[#5c5e62] font-normal">
                  Calculado al finalizar la compra
                </span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold text-[#171a20] mt-6 mb-2">
                <span>Subtotal</span>
                <span>
                  ${productInCart.reduce((acc, p) => acc + Number(p.price), 0)}
                </span>
              </div>
              <p className="text-xs text-[#5c5e62] mb-6">
                4 pagos sin intereses de{" "}
                {(
                  productInCart.reduce((acc, p) => acc + Number(p.price), 0) / 4
                ).toFixed(2)}
                . <span className="underline cursor-pointer">Learn more</span>
              </p>
              <Link
                href="/checking/address"
                className="block w-full bg-[#395adf] text-white py-3 rounded-lg font-semibold text-base hover:bg-[#2845b8] transition-colors duration-200 shadow-none tracking-wide text-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background: #fff;
        }
        @media (max-width: 768px) {
          .shadow-\[0_2px_24px_0_rgba\(0,
          0,
          0,
          0\.08\)\] {
            box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.06) !important;
          }
        }
      `}</style>
    </div>
  );
}
