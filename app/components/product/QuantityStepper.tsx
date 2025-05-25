"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantityStepper = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const onQuantityChanged = (value: number) => {
        if (count + value < 1) return;
        setCount(count + value);
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
                {count}
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
