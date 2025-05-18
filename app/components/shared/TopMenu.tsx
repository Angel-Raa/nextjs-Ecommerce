'use client'
import { useUIStore } from "@/lib/store/ui-store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
    const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);
  
  return (
    <nav className="flex px-8 py-4 justify-between items-center w-full bg-white border-b border-gray-200">
      {/* Logo */}
      <div>
        <Link href={'/'}>
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
          href={"/category/hombres"}
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/mujeres"}
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/niños"}
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
            2
          </span>
        </Link>
        <button 
        onClick={toggleSideMenu}
        className="px-4 py-2 rounded-md  hover:bg-gray-200 text-gray-800 font-medium transition-colors duration-200">
          Menú
        </button>
      </div>
    </nav>
  );
};
