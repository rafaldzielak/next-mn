import { fetchJson } from "./api";

export interface Product {
  id: number;
  title: string;
  description: string;
}

const CMS_URL = process.env.CMS_URL;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
};

export const stripProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
};

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
};
