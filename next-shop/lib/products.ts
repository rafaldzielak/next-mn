export interface Product {
  id: number;
  title: string;
  description: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:1337/products");
  const products = await response.json();
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
  const response = await fetch(`http://localhost:1337/products/${id}`);
  const product = await response.json();
  return stripProduct(product);
};
