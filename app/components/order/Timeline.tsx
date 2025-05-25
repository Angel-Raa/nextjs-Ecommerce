import { CheckCircle, Package, Truck } from "lucide-react";

export const Timeline = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">Pedido confirmado</p>
          <p className="text-sm text-gray-500">January 15, 2024 at 2:30 PM</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Package className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            Tarifa de Procesamiento
          </p>
          <p className="text-sm text-gray-500">
            Estimated: January 16-17, 2024
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Truck className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">Enviada</p>
          <p className="text-sm text-gray-400">
            Estimated: January 18-20, 2024
          </p>
        </div>
      </div>
    </div>
  );
};
