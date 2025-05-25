import { NotFound } from "@/app/components";

export default function NotFoundProduct() {
  return (
    <>
      <NotFound
        title="Producto no encontrado"
        description="El producto que buscas no existe o ha sido eliminado."
      />
    </>
  );
}
