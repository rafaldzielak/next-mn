import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Title from "../components/Title";
import { REVALIDATE_SECONDS } from "../lib/api";
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
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: REVALIDATE_SECONDS,
  };
};

export default Home;
