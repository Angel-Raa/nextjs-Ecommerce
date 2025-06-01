export const revalidate = 60; // Revalidate every 60 seconds

import { getPaginatedProductsWithImages } from "@/app/actions/products/products-actions";
import { Pagination, ProductsGrid, Title } from "@/app/components";

interface Params {
  id: string;
}

type SearchParams = {
  page?: string;
};

type Gender = "men" | "women" | "kid" | "unisex";

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { id } = await params;
  const { page } = await searchParams;
  const pages = page && typeof page === "string" ? parseInt(page, 10) : 1;

  const allowedGenders: Gender[] = ["men", "women", "kid", "unisex"];

  if (!allowedGenders.includes(id as Gender)) {
    throw new Error(`Invalid gender value: ${id}`);
  }

  const gender = id as Gender;

  const { products, pagination } = await getPaginatedProductsWithImages({
    page: pages,
    gender,
  });

  if (!products || products.length === 0) {
    return (
      <Title
        title="Tienda"
        subtitle="No hay productos disponibles"
        className="mb-8"
      />
    );
  }

  const { currentPage, totalPages } = pagination;

  const titles: Record<Gender | "default", string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
    default: "Tienda",
  };

  const subtitles: Record<Gender | "default", string> = {
    men: "Productos para Hombres",
    women: "Productos para Mujeres",
    kid: "Productos para Niños",
    unisex: "Productos Unisex",
    default: "Todos Los Productos",
  };

  return (
    <>
      <Title
        title={titles[id as Gender] || titles.default}
        subtitle={subtitles[id as Gender] || subtitles.default}
        className="mb-8"
      />
      <ProductsGrid products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        className="mt-8 mx-auto max-w-2xl flex items-center justify-center"
      />
    </>
  );
}
