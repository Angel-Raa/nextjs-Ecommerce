import { ProductsGrid, Title } from "@/app/components";
import { initialData } from "@/app/seed/seed";

const productos = initialData.products;
// Función para filtrar productos por género
const filterByGender = (gender: "men" | "women" | "kids") => {
  return productos.filter((product) => product.gender === gender);
};
interface Props {
  params: {
    id: string;
  };
}

export default function Categoty({ params }: Props) {
  const { id } = params;

  const filteredProducts = filterByGender(id as "men" | "women" | "kids");
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
      <ProductsGrid products={filteredProducts} />
    </>
  );
}
