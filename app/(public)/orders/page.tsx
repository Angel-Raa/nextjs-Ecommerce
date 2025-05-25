import { Title } from "@/app/components"
import Link from "next/link"
import { Search, Filter, ChevronRight, CreditCard, Package, CheckCircle, Clock, XCircle } from "lucide-react"

// Mock orders data
const ordersData = [
  {
    id: "ORD-001",
    customerName: "Angel Aguero",
    date: "2024-01-15",
    status: "paid",
    total: 129990,
    items: 3,
    deliveryDate: "2024-01-22",
  },
  {
    id: "ORD-002",
    customerName: "Maria Rodriguez",
    date: "2024-01-14",
    status: "pending",
    total: 52990,
    items: 1,
    deliveryDate: "2024-01-21",
  },
  {
    id: "ORD-003",
    customerName: "Carlos Martinez",
    date: "2024-01-13",
    status: "shipped",
    total: 38990,
    items: 2,
    deliveryDate: "2024-01-20",
  },
  {
    id: "ORD-004",
    customerName: "Ana Silva",
    date: "2024-01-12",
    status: "delivered",
    total: 109990,
    items: 1,
    deliveryDate: "2024-01-19",
  },
  {
    id: "ORD-005",
    customerName: "Luis Fernandez",
    date: "2024-01-11",
    status: "cancelled",
    total: 79990,
    items: 2,
    deliveryDate: null,
  },
]

const statusConfig = {
  paid: {
    icon: CheckCircle,
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    text: "Paid",
  },
  pending: {
    icon: Clock,
    color: "text-yellow-700",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    text: "Pending Payment",
  },
  shipped: {
    icon: Package,
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    text: "Shipped",
  },
  delivered: {
    icon: CheckCircle,
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    text: "Delivered",
  },
  cancelled: {
    icon: XCircle,
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    text: "Cancelled",
  },
}

export default function Orders() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6">
            <Title title="Orders" subtitle="Manage and track all your orders" />

            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 w-64"
                />
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-light">Total Orders</p>
                <p className="text-2xl font-light text-gray-900">{ordersData.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-light">Paid Orders</p>
                <p className="text-2xl font-light text-gray-900">
                  {
                    ordersData.filter(
                      (order) => order.status === "paid" || order.status === "shipped" || order.status === "delivered",
                    ).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-light">Pending</p>
                <p className="text-2xl font-light text-gray-900">
                  {ordersData.filter((order) => order.status === "pending").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-light">Total Revenue</p>
                <p className="text-2xl font-light text-gray-900">
                  $
                  {ordersData
                    .reduce((acc, order) => acc + (order.status !== "cancelled" ? order.total : 0), 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders List - Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {ordersData.map((order) => {
                  const status = statusConfig[order.status as keyof typeof statusConfig]
                  const StatusIcon = status.icon

                  return (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.customerName}</div>
                        <div className="text-sm text-gray-500">
                          {order.items} item{order.items > 1 ? "s" : ""}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(order.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${status.bgColor} ${status.borderColor} ${status.color} border`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          <span>{status.text}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">${order.total.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/orders/${order.id}`}
                          className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <span>View Order</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders List - Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {ordersData.map((order) => {
            const status = statusConfig[order.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.customerName}</p>
                  </div>
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${status.bgColor} ${status.borderColor} ${status.color} border`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    <span>{status.text}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                    <p className="text-sm text-gray-900">
                      {new Date(order.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Total</p>
                    <p className="text-sm font-medium text-gray-900">${order.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Items</p>
                    <p className="text-sm text-gray-900">
                      {order.items} item{order.items > 1 ? "s" : ""}
                    </p>
                  </div>
                  {order.deliveryDate && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Delivery</p>
                      <p className="text-sm text-gray-900">
                        {new Date(order.deliveryDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                </div>

                <Link
                  href={`/orders/${order.id}`}
                  className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-900">View Order Details</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Empty State (if no orders) */}
        {ordersData.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay pedidos todavía</h3>
            <p className="text-gray-500 mb-6">Cuando los clientes realicen pedidos, aparecerán aquí.</p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors duration-200"
            >
             Explorar productos
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
