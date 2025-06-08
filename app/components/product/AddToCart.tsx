"use client";
import { Size } from "@/interfaces/products";
import { QuantityStepper } from "./QuantityStepper";
import { SizeTab } from "./SizeTab";
import { useState } from "react";
interface Props {
  size: Size;
  quantity: number;
  availableSizes: Size[];
}
export const AddToCart = ({ availableSizes, size }: Props) => {
  const [selectSize, setSelectSize] = useState<Size | undefined>(size);
  const [selectQuantity, setQuantity] = useState<number>(1);
  return (
    <>
      {/* Selector de Tallas */}
      <div className="mb-8">
        <SizeTab
          availableSizes={availableSizes}
          selectSize={selectSize}
          onSizeChange={setSelectSize}
        />
      </div>
      {/* Selector de Cantidad */}
      <div className="mb-8">
        <QuantityStepper
          quantity={selectQuantity}
          onQuantityChange={setQuantity}
        />
      </div>
      <button className="w-full bg-[#171a20] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#22262b] transition-colors duration-200 shadow-none tracking-widest uppercase mb-10">
        Agregar al carrito
      </button>
    </>
  );
};
