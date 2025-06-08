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
  removeFromCart: (product: {
    id: string;
    slug: string;
    price: number;
    quantity: number;
    title: string;
    size: Size;
    image: string;
  }) => void;
  updateQuantity: ({
    product,
    quantity,
  }: {
    product: {
      id: string;
      slug: string;
      price: number;
      title: string;
      size: Size;
      image: string;
    };
    quantity: number;
  }) => void;
  clearCart: ({ id }: { id: string }) => void;
  getCartItems: () => number;
  getSummaryInformation: () => {
    items:number,
    price:number,
    uniqueItems:number

  };
}

export const useCartStore = create<CartActions & CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      getSummaryInformation() {
        const { cartItems } = get();
        const totalItems = cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalPrice = cartItems.reduce(
          (total, items) => total + items.price * items.quantity,
          0
        );
        const uniqueItems = cartItems.length;
        return {
          items: totalItems,
          price: totalPrice,
          uniqueItems,
        };
      },
      addToCart: (product) =>
        set((state) => ({
          cartItems: state.cartItems.some(
            (item) => item.id === product.id && item.size === product.size
          )
            ? state.cartItems.map((item) =>
                item.id === product.id && item.size === product.size
                  ? { ...item, quantity: item.quantity + product.quantity }
                  : item
              )
            : [...state.cartItems, product],
        })),
      removeFromCart: (product) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id !== product.id || item.size !== product.size
          ),
        })),
      updateQuantity: ({ product, quantity }) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === product.id && item.size === product.size
              ? { ...item, quantity }
              : item
          ),
        })),
      clearCart: ({ id }) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id ),
        })),
      getCartItems: (): number => {
        const { cartItems } = get();
        return cartItems.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
