"use client";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoTicketOutline,
} from "react-icons/io5";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { useUIStore } from "@/lib/store/ui-store";
import clsx from "clsx";

const sidebarItem = [
  {
    href: "/profile",
    icon: <IoPersonOutline size={30} />,
    title: "Ver perfil",
  },
  {
    href: "/orders",
    icon: <IoTicketOutline size={30} />,
    title: "Historial de órdenes",
  },
  {
    href: "/auth/login",
    icon: <IoLogInOutline size={30} />,
    title: "Iniciar sesión",
  },
  {
    href: "/auth/sign",
    icon: <IoLogOutOutline size={30} />,
    title: "Cerrar sesión",
  },
];

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);
  return (
    <div>
      {/* BG Black */}
      {isSideMenuOpen && <div className="fixed inset-0 z-10 bg-black/40" />}

      {/* BG Blur */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-10 backdrop-blur-md" />
      )}

      {/* Sidebar */}
      <nav
        className={clsx(
          "fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm md:max-w-md bg-white z-20 shadow-xl transition-transform duration-300 p-6 flex flex-col gap-6",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          }
        )}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-black transition-colors"
          onClick={toggleSideMenu}
          aria-label="Cerrar menú"
        >
          <IoCloseOutline size={32} />
        </button>
        {/* Logo */}
        <div className="flex items-center justify-center mt-2 mb-6">
          <span className="font-semibold text-xl tracking-widest text-gray-900">
            E-commerce-SSD
          </span>
        </div>
        {/* Input */}
        <div className="relative">
          <IoSearchOutline
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-full bg-gray-100 rounded-full pl-10 py-2 pr-4 border border-gray-200 text-base text-gray-800 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/** OPCIONES */}
        {sidebarItem.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}

        {/** LIne Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />
      </nav>
    </div>
  );
};
