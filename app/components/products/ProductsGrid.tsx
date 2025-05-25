import type { Products } from "@/interfaces/products"
import { ProductsGridItem } from "./ProductsGridItem"

interface Props {
  products: Products[]
}

export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {products.map((product, index) => (
          <ProductsGridItem key={product.slug} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}
