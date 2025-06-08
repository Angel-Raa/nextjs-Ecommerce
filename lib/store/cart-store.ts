import { Size } from "@/interfaces/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: Array<{
    id: string;
    slug: string;
    price: number;
    quantity: number;
    title: string;
    size: Size;
    image: string;
  }>;
}

interface CartActions {
  addToCart: (product: {
    id: string;
    slug: string;
    price: number;
    quantity: number;
    title: string;
    size: Size;
    image: string;
  }) => void;
  removeFromCart?: ({ id }: { id: string }) => void;
  updateQuantity?: ({ id, quantity }: { id: string; quantity: number }) => void;
  clearCart?: () => void;
}

export const useCartStore = create<CartActions & CartState>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product) =>
        set((state) => ({
          // Check if the product already exists in the cart
          cartItems: state.cartItems.some((item) => item.id === product.id)
            ? state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              )
            : [...state.cartItems, product],
        })),

    }),

    {
      name: "cart-storage", // unique name for storage key
    }
  )
);
