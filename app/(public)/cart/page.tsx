"use client";
import { Checkout, ShoppingCart } from "@/app/components";



export default function Cart() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-[#fff] px-2 sm:px-0">
      <div className="w-full max-w-7xl py-12">
        <h1 className="text-3xl font-semibold text-[#171a20] mb-10 px-2 md:px-0">
          Carrito
        </h1>
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          {/* Carrito */}
          <ShoppingCart />
          {/* Checkout */}

          <Checkout  />
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
