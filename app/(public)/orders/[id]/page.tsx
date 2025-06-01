import { initialData } from "@/app/seed/seed";
import Link from "next/link";
import {
  CheckCircle,
  Truck,
  Package,
  MapPin,
  CreditCard,
  Calendar,
  Download,
  ArrowLeft,
} from "lucide-react";
import { OrderItems, Timeline } from "@/app/components";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
];

export default async function Order({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Mock order data - in real app this would come from database
  const orderData = {
    id,
    status: "confirmed",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-22",
    total: productInCart.reduce((acc, product) => acc + product.price, 0),
    subtotal: productInCart.reduce((acc, product) => acc + product.price, 0),
    tax: productInCart.reduce((acc, product) => acc + product.price, 0) * 0.1,
    shipping: 0,
  };

  const statusConfig = {
    confirmed: {
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      text: "Order Confirmed",
    },
    processing: {
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      text: "Processing",
    },
    shipped: {
      icon: Truck,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      text: "Shipped",
    },
  };

  const currentStatus =
    statusConfig[orderData.status as keyof typeof statusConfig];
  const StatusIcon = currentStatus.icon;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/orders"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <h1 className="text-2xl font-light tracking-wide text-gray-900">
                Orden #{id}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span>Download Invoice</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Order Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Estado del pedido
                </h2>
                <div
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full ${currentStatus.bgColor} ${currentStatus.borderColor} border`}
                >
                  <StatusIcon className={`w-4 h-4 ${currentStatus.color}`} />
                  <span
                    className={`text-sm font-medium ${currentStatus.color}`}
                  >
                    {currentStatus.text}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <Timeline />
            </div>

            {/* Delivery Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-5 h-5 text-gray-400" />
                <h2 className="text-xl font-medium text-gray-900">
                  Información de entrega
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Dirección de envío
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium text-gray-900">Angel Aguero</p>
                    <p>Calle Rogelio Rose</p>
                    <p>Santo Domingo Oeste, Herrera</p>
                    <p>809-102-2716</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Detalles de la entrega
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Estimada: January 22, 2024</span>
                    </div>
                    <p>Envío estándar (Free)</p>
                    <p>Se requiere firma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                Artículos del pedido
              </h2>

              <div className="space-y-6">
                {productInCart.map((product) => (
                  <OrderItems {...product} key={product.slug} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 sticky top-8">
                <h2 className="text-xl font-medium text-gray-900 mb-6">
                  Resumen del pedido
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Subtotal ({productInCart.length} items)
                    </span>
                    <span className="text-gray-900">
                      ${orderData.subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Envío</span>
                    <span className="text-gray-900">
                      {orderData.shipping === 0
                        ? "Free"
                        : `$${orderData.shipping.toLocaleString()}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">
                      ${orderData.tax.toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900">
                        Total
                      </span>
                      <span className="text-lg font-medium text-gray-900">
                        ${(orderData.total + orderData.tax).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <h3 className="text-base font-medium text-gray-900">
                      Método de pago
                    </h3>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                    <span className="text-sm text-gray-600">
                      •••• •••• •••• 4242
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 space-y-3">
                  <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors duration-200">
                    Paquete de pista
                  </button>

                  <button className="w-full border border-gray-200 text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                    Contactar con soporte técnico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
