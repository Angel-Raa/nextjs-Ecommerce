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
  const [posted, setPosted] = useState<boolean>(false);
  const addToCart = (): void => {
    setPosted(true);
    // Aquí puedes implementar la lógica para agregar al carrito
    if (!selectSize || selectQuantity < 1) {
      console.error("Debe seleccionar una talla y una cantidad válida.");
      return;
    }
    // Simulación de agregar al carrito
    console.log("Producto agregado al carrito:", {
      size: selectSize,
      quantity: selectQuantity,
    });
  };
  return (
    <>
      {/* Mensaje de debe selecionas un a talla  */}
      {posted && !selectSize && (
        <div className="text-red-500 text-sm mb-4">
          Debe seleccionar una talla antes de agregar al carrito.
        </div>
      )}
      {/* Mensaje de debe selecionas una cantidad  */}
      
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
      <button
        onClick={addToCart}
        type="button"
        aria-label="Agregar al carrito"
        disabled={!selectSize || selectQuantity < 1}
        className="w-full bg-[#171a20] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#22262b] transition-colors duration-200 shadow-none tracking-widest uppercase mb-10"
      >
        Agregar al carrito
      </button>
    </>
  );
};
