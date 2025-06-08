"use client";
import { currencyFormat } from "@/app/utils/currencyFormat";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Checkout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const productInCart = useCartStore((state) => state.cartItems);
  const getSummaryInformation = useCartStore(
    (state) => state.getSummaryInformation
  );

  useEffect(() => {
    setIsMounted(true);
  }, [productInCart]);

  if (!isMounted) {
    return null;
  }
  //const {} = summaryInformation
  const { price, items: totalItems } = getSummaryInformation();
  return (
    <div className="w-full md:w-[400px] flex-shrink-0">
      <div className="bg-white rounded-2xl border border-[#ececec] shadow-[0_2px_24px_0_rgba(0,0,0,0.08)] p-8 md:mt-0 mt-8">
        <h2 className="text-xl font-semibold text-[#171a20] mb-6">
          Resumen del pedido{" "}
        </h2>
        <div className="flex justify-between items-center text-base text-[#171a20] mb-3">
          <span>Artículos ({totalItems})</span>
          <span className="text-[#5c5e62] font-normal">
            {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
          </span>
        </div>
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
          <span>{price}</span>
        </div>
        <p className="text-xs text-[#5c5e62] mb-6">
          4 pagos sin intereses de {currencyFormat({ value: price / 4 })}
          <span className="underline cursor-pointer">Learn more</span>
        </p>
        <Link
          href="/checking/address"
          className="block w-full bg-[#395adf] text-white py-3 rounded-lg font-semibold text-base hover:bg-[#2845b8] transition-colors duration-200 shadow-none tracking-wide text-center"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
