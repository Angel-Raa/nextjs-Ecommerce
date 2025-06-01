export const revalidate = 60; // Revalidate every 60 seconds
import { getPaginatedProductsWithImages } from "@/app/actions/products/products-actions";
import { Pagination, ProductsGrid, Title } from "@/app/components";

export default async function Shopping({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pages = page && typeof page === "string" ? parseInt(page, 10) : 1;

  const { products, pagination } = await getPaginatedProductsWithImages({
    page: pages,
  });

  const { currentPage, totalPages } = pagination;
  if (!products || products.length === 0) {
    return <Title title="Tienda" subtitle="No hay productos disponibles" />;
  }
  return (
    <>
      <Title title="Tienda" subtitle="Todos Los Productos" />
      <ProductsGrid products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        className="mt-8 mx-auto max-w-2xl items-center justify-center"
      />
    </>
  );
}
