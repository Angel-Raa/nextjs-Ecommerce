"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
    onQuantityChange?: (quantity: number) => void;
    onAddToCart?: () => void;
}

export const QuantityStepper = ({ quantity, onQuantityChange }: Props) => {

    const onQuantityChanged = (value: number) => {
        if (quantity + value < 1) {
            return; // Prevent going below 1
        }
        // Call the callback with the new quantity
       onQuantityChange?.(quantity + value);
       
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => onQuantityChanged(-1)}
                className="transition-colors rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Disminuir cantidad"
            >
                <IoRemoveCircleOutline size={36} className="text-black" />
            </button>
            <span className="min-w-[48px] text-center text-lg font-medium bg-white border border-gray-300 rounded px-4 py-1 shadow-sm select-none">
                {quantity}
            </span>
            <button
                onClick={() => onQuantityChanged(1)}
                className="transition-colors rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Aumentar cantidad"
            >
                <IoAddCircleOutline size={36} className="text-black" />
            </button>
        </div>
    );
};
