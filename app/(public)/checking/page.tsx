"use client"
import { initialData } from "@/app/seed/seed"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, CreditCard, Shield } from "lucide-react"

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
]

export default function Checking() {
  const total = productInCart.reduce((acc, product) => acc + product.price, 0)
  const tax = total * 0.1
  const shipping:number = 0
  const finalTotal = total + tax + shipping

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-light tracking-wide text-gray-900">Verificar</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Pago seguro</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-7">
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <h2 className="text-lg font-medium text-gray-900">Dirección de entrega</h2>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Edit</button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="space-y-1">
                  <p className="font-medium text-gray-900">Angel Aguero</p>
                  <p className="text-gray-600">Calle Rogelio Rose</p>
                  <p className="text-gray-600">Santo Domingo Oeste, Herrera</p>
                  <p className="text-gray-600">809-102-2716</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Change</button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                  <span className="font-medium text-gray-900">•••• •••• •••• 4242</span>
                  <span className="text-gray-500">Caduca 12/25</span>
                </div>
              </div>
            </div>

            {/* Order Items - Mobile */}
            <div className="lg:hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Resumen del pedido ({productInCart.length} elementos)</h2>
              <div className="space-y-4">
                {productInCart.slice(0, 2).map((product) => (
                  <div key={product.slug} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <Image src={`/products/${product.images[0]}`} alt={product.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                      <p className="text-sm text-gray-500">{product.gender}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                ))}
                {productInCart.length > 2 && (
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Ver todo {productInCart.length} elementos
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary - Desktop */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Resumen del pedido</h2>

              {/* Items List */}
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {productInCart.map((product) => (
                  <div key={product.slug} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={`/products/${product.images[0]}`} alt={product.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                      <p className="text-xs text-gray-500">{product.gender}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envío</span>
                  <span className="text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Impuesto</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-900">Total</span>
                    <span className="text-lg font-medium text-gray-900">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <Link href="/orders/1" className="block w-full mt-8">
                <button className="w-full bg-black text-white py-4 rounded-xl font-medium text-base hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                  <span>Realizar pedido</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>

              {/* Security Notice */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-gray-500">
                <Shield className="w-3 h-3" />
                <span>Su información de pago está segura y encriptada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
