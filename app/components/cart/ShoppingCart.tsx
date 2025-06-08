"use client";
import Link from "next/link";
import Image from "next/image";
import { QuantityStepper } from "../product/QuantityStepper";
import { useCartStore } from "@/lib/store/cart-store";
import { CartProduct } from "@/interfaces/products";

export const ShoppingCart = () => {
  const productInCart = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleQuantityChange = (quantity: number, product: CartProduct) => {
    updateQuantity({ product, quantity });
  };

  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col gap-8">
        {productInCart.map((product) => (
          <div
            key={`${product.slug}-${product.size}`}
            className="flex flex-row items-center gap-6 py-6 border-b border-[#ececec] last:border-b-0"
          >
            <div className="flex-shrink-0">
              <Image
                className="rounded-lg object-contain bg-[#fafbfc] border border-[#ececec]"
                width={96}
                height={96}
                alt={product.title}
                src={`/products/${product.image}`}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <Link
                href={`/product/${product.slug}`}
                className="text-sm text-[#5c5e62] hover:text-[#171a20] underline transition-colors mb-1"
              >
                Ver producto
              </Link>
              <p className="text-base md:text-lg font-medium text-[#171a20] truncate mb-1">
                {product.title}
              </p>
              <p className="text-sm text-[#5c5e62] mb-1 font-light">
                Talla: {product.size ? product.size : "N/A"}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-base text-[#171a20] font-medium">
                  ${product.price}
                </span>
                <QuantityStepper
                  quantity={product.quantity}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(quantity, product)
                  }
                />
                <button
                  onClick={() => removeFromCart(product)}
                  className="text-xs text-[#5c5e62] hover:text-red-600 underline transition-colors"
                >
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
  );
};
