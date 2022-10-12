import Head from "next/head";
import { FC, useEffect, useState } from "react";
import Title from "../components/Title";
import { getProducts, Product } from "../lib/products";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>Next shop</Title>
      </main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
