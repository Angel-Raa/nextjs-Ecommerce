import Image from "next/image";

interface Props {
  title: string;
  price: number;
  images: string[];
  gender:string
}

export const OrderItems = ({images, price, title, gender}: Props) => {
  return (
    <div
      
      className="flex items-center space-x-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
    >
      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={`/products/${images[0]}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-gray-900 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{gender}</p>
        <p className="text-sm text-gray-500">Cantidad: 1</p>
      </div>

      <div className="text-right">
        <p className="text-base font-medium text-gray-900">
          ${price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
