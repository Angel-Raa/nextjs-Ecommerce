"use client";
import { useCartStore } from "@/lib/store/cart-store";
import { useUIStore } from "@/lib/store/ui-store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);
  const [totalItems, setTotalItems] = useState<number>(0); // Placeholder for any state you might need
  const totalCartItems = useCartStore((state) => state.getCartItems());
  //const [loaded, setLoaded] = useState<boolean>(false);
  // Cargar el estado del carrito una vez que el componente se haya montado
  // Esto es útil si necesitas realizar alguna acción al cargar el componente
  useEffect(() => {
    setTotalItems(totalCartItems);
  },[totalCartItems]);

  return (
    <nav className="flex px-8 py-4 justify-between items-center w-full bg-white border-b border-gray-200">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <span className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-gray-700 transition-colors duration-200">
            E-Commerce <span className="text-gray-500">SDD</span>
          </span>
        </Link>
      </div>
      {/* Puedes agregar más elementos aquí, como un menú o iconos */}
      {/** Center Menu */}
      <div className="hidden sm:flex flex-1 justify-center">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/women"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/kid"}
        >
          Niños
        </Link>
      </div>

      {/** Search, Cart, Menu */}
      <div className="flex items-center gap-4 relative">
        <Link href="/search">
          <IoSearchOutline
            size={24}
            className="w-6 h-6 hover:text-blue-700 transition-colors"
          />
        </Link>
        <Link href="/cart" className="relative">
          <IoCartOutline
            size={24}
            className="w-6 h-6 hover:text-blue-700 transition-colors"
          />
          <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full px-1 font-bold">
            {totalItems > 0 ? totalItems : 0}
          </span>
        </Link>
        <button
          onClick={toggleSideMenu}
          className="px-4 py-2 rounded-md  hover:bg-gray-200 text-gray-800 font-medium transition-colors duration-200"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
