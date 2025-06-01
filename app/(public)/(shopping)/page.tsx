export const revalidate = 60; // Revalidate every 60 seconds
import { getPaginatedProductsWithImages } from "@/app/actions/products/products-actions";
import { Pagination, ProductsGrid, Title } from "@/app/components";
interface SearchParams {
  searchParams: {
    page: string;
  };
}

export default async function Shopping({ searchParams }: SearchParams) {
  const page =
    searchParams.page && typeof searchParams.page === "string"
      ? parseInt(searchParams.page, 10)
      : 1;

  const { products, pagination } = await getPaginatedProductsWithImages({
    page,
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
