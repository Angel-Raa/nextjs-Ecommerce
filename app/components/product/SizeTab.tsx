import { Size } from "@/interfaces/products";
import clsx from "clsx";

interface Props {
  selectSize?: Size;
  availableSizes: Size[];
  onSizeChange?: (size: Size) => void;
  onQuantityChange?: (quantity: number) => void;
  onAddToCart?: () => void;
}

export const SizeTab = ({ availableSizes, selectSize, onSizeChange }: Props) => {
  return (
    <div className="my-6">
      <h3 className="font-semibold mb-4 text-gray-900 text-base tracking-wide">
        Tallas disponibles
      </h3>
      <div className="flex flex-wrap gap-3">
        {availableSizes.map((size) => (
          <button
          onClick={() => onSizeChange?.(size)}
            key={size}
            className={clsx(
              "w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-200 text-base font-medium focus:outline-none",
              "bg-white",
              "hover:border-gray-900 hover:text-gray-900 hover:shadow-md",
              {
                "border-gray-900 text-gray-900 shadow-md": size === selectSize,
                "border-gray-300 text-gray-500": size !== selectSize,
              }
            )}
            aria-pressed={size === selectSize}
            tabIndex={0}
            type="button"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
