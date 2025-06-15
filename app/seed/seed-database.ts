import prisma from "@/lib/database/prisma";
import { initialData } from "./seed";
const main = async () => {
  try {
    console.log("Iniciando la siembra de la base de datos...");
    const { categories, products,users  } = initialData;

    await Promise.all([
    
      prisma.users.deleteMany({}),
      prisma.productImage.deleteMany({}),
      prisma.product.deleteMany({}),
      prisma.category.deleteMany({}),
    ]);


    await prisma.users.createMany({
      data:users
    })
  

    
    const categoriesData = categories.map((name) => ({ name }));
    await prisma.category.createMany({ data: categoriesData });

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce((acc, category) => {
      acc[category.name.toLowerCase()] = category.id;
      return acc;
    }, {} as Record<string, string>);

    for (const product of products) {
      const { type, images, ...rest } = product;
      const categoryId = categoriesMap[type];
      const productDb = await prisma.product.create({
        data: { ...rest, categoryId },
      });
      if (images && images.length > 0) {
        const imagesData = images.map((url) => ({
          productId: productDb.id,
          url,
        }));
        await prisma.productImage.createMany({ data: imagesData });
      }
    }

    console.log("Base de datos sembrada con éxito....");
  } catch (error) {
    console.error("Error sembrando la base de datos:", error);
  } finally {
    await prisma.$disconnect();
  }
};

main();
