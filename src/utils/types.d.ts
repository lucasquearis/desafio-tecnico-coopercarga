export type ProductType = {
  name: string;
  image_url: string;
  type: string;
  price: number;
  seller: string;
  available_sizes: string[];
  details: string;
  sport: string;
};

export type DisplaySizeType = "small" | "base" | "xl";

export type SortProductsType = "lowestPrice" | "highestPrice" | "name";
