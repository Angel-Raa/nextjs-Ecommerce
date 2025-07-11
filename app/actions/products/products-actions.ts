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

    // Valida gender
    if (gender && !["men", "women", "kid", "unisex"].includes(gender)) {
      throw new Error("Invalid gender value");
    }

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

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return {
      ...product,
      images: product.ProductImage.map((img) => img.url),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};

export const getStockBySlug = async (slug: string) => {
  try {
    const stock = await prisma.product.findUnique({
      where: { slug },
      select: {
        inStock: true,
      },
    });
    return stock?.inStock ?? 0; // Retorna 0 si no se encuentra el producto o no tiene stock
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch stock");
  }
};
