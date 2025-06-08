"use client";
import {
  Checkout,
  EmptyStateIllustrated,
  ShoppingCart,
} from "@/app/components";
import { useCartStore } from "@/lib/store/cart-store";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  if (cartItems.length === 0) {
    return (
      <EmptyStateIllustrated
        type="cart"
        title="Tu carrito está vacío"
        description="Agrega productos para comenzar tu compra"
        primaryAction={{
          label: "Explorar productos",
          href: "/",
        }}
        className="mt-12"
      />
    );
  }
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

          <Checkout />
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
