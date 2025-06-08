"use client";

import { getStockBySlug } from "@/app/actions/products/products-actions";
import { useEffect, useState } from "react";

interface StockLabelProps {
  slug: string;
}
export const StockLabel = ({ slug }: StockLabelProps) => {
  const [inStock, setInStock] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (slug) {
      getStock();
    }
  }, []); // Add slug as dependency

  const getStock = async () => {
    const stock = await getStockBySlug(slug);
    setInStock(stock);
    setLoading(false);
    console.log("Stock data:", stock);
  };

  if (!slug) {
    return null; // or handle the case where slug is not provided
  }

  return (
    <>
      <h1
        className={`antialiased font-bold text-lg  md:text-3xl lg:text-4xl tracking-tight leading-tight mb-4 text-[#171a20]`}
      >
        STOCK: {inStock}{" "}
      </h1>

      <h1 className="antialiased font-bold text-xl md:text-3xl lg:text-4xl tracking-tight leading-tight mb-4 text-[#171a20] animate-pulse">
        &nbsp;
        {loading ? "Cargando stock..." : inStock > 0 ? "Disponible" : "Agotado"}
      </h1>
    </>
  );
};
