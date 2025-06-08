"use client";
import { CartProduct, Products, Size } from "@/interfaces/products";
import { QuantityStepper } from "./QuantityStepper";
import { SizeTab } from "./SizeTab";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
interface Props {
  quantity: number;
  product: Products;
}
export const AddToCart = ({ product }: Props) => {
  const { id, slug, price, title, images, sizes } = product;
  const addProductToCart = useCartStore((state) => state.addToCart);
  const [selectSize, setSelectSize] = useState<Size | undefined>(sizes[0]); // Inicializa con la primera talla disponible
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
    // Aquí podrías llamar a una función del store para agregar el producto al carrito
    const product: CartProduct = {
      id: id,
      slug: slug,
      price: price,
      quantity: selectQuantity,
      title: title,
      size: selectSize,
      image: images[0] || "", // Asegúrate de que haya al menos una imagen
    };
    addProductToCart(product);
    console.log("Producto agregado al carrito:", product);
    
    setPosted(false); // Resetea el estado de posted después de agregar al carrito
    setSelectSize(undefined); // Resetea la talla seleccionada
    setQuantity(1); // Resetea la cantidad seleccionada
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
          availableSizes={sizes}
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
