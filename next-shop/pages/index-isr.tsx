// With ISR (Incremental Static Regeneration) in getStaticProps

import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Title from "../components/Title";
import { getProducts, Product } from "../lib/products";

type Props = {
  products: Product[];
};

const Home: FC<Props> = ({ products }) => {
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

// revalidate is for how long this data is valid for, after that time next will get the data again
// It will return old page at first render after that time
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 5 * 60, //seconds
  };
};

export default Home;
