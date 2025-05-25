import { Title } from "@/app/components";
import Link from "next/link";

export default function Address() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 sm:p-10">
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Nombres
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="given-name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Apellidos
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="family-name"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="address-line1"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Dirección 2 (opcional)
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="address-line2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Código postal
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="postal-code"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="address-level2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              País
            </label>
            <select
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="country"
            >
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="text"
              className="h-11 px-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-white transition"
              autoComplete="tel"
            />
          </div>

          <div className="sm:col-span-2 mt-6">
            <Link
              href="/checking"
              className="block w-full h-12 bg-black text-white text-center rounded hover:bg-gray-900 transition font-semibold tracking-wide text-base leading-[48px]"
            >
              Siguiente
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
