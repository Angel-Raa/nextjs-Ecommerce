export const revalidate = 60; // Revalidate every 60 seconds
import { getPaginatedProductsWithImages } from "@/app/actions/products/products-actions";
import { Pagination, ProductsGrid, Title } from "@/app/components";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
}

export default async function Categoty({ params, searchParams }: Props) {
  const { id } = params;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  // Validar el ID de la categoría
  if (id && !["men", "women", "kid", "unisex"].includes(id)) {
    throw new Error("Invalid gender value");
  }

  const allowedGenders = ["men", "women", "kid", "unisex"] as const;
  type Gender = (typeof allowedGenders)[number];

  const gender = allowedGenders.includes(id as Gender)
    ? (id as Gender)
    : undefined;

  const { products, pagination } = await getPaginatedProductsWithImages({
    page,
    gender,
  });
  if (!products || products.length === 0) {
    return <Title title="Tienda" subtitle="No hay productos disponibles" />;
  }
  const { currentPage, totalPages } = pagination;

  return (
    <>
      <Title
        title={
          id === "men"
            ? "Hombres"
            : id === "women"
            ? "Mujeres"
            : id === "kids"
            ? "Niños"
            : "Tienda"
        }
        subtitle={
          id === "men"
            ? "Productos para Hombres"
            : id === "women"
            ? "Productos para Mujeres"
            : id === "kids"
            ? "Productos para Niños"
            : "Todos Los Productos"
        }
      />
      <ProductsGrid products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        className="mt-8 mx-auto max-w-2xl items-center justify-center"
      />
    </>
  );
}
