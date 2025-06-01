"use server";

import prisma from "@/lib/database/prisma";

interface PaginationParams {
  page?: number;
  take?: number;
  gender?: "men" | "women" | "kid" | "unisex";
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationParams = {}) => {
  try {
    const validatedPage = Math.max(1, page);
    const validatedTake = Math.max(1, take);

    const [productsCount, products] = await Promise.all([
      prisma.product.count(),
      prisma.product.findMany({
        skip: (validatedPage - 1) * validatedTake,
        take: validatedTake,
        include: {
          ProductImage: {
            select: {
              url: true,
            },
          },
        },
        where: gender ? { gender } : {},
      }),
    ]);

    return {
      products: products.map(({ ProductImage, ...product }) => ({
        ...product,
        images: ProductImage.map((img) => img.url),
      })),
      pagination: {
        currentPage: validatedPage,
        totalPages: Math.ceil(productsCount / validatedTake),
        totalProducts: productsCount,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
