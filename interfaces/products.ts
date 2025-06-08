export interface Products {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  // TODO: type: Types;
  gender: "men" | "women" | "kid" | "unisex";
}

export interface CartProduct {
  id: string;
  slug: string;
  price: number;
  quantity: number;
  title: string;
  size: Size;
  image: string;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type Types = "shirts" | "pants" | "hoodies" | "hats";
