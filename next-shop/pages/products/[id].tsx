import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import Title from "../../components/Title";
import { getProducts, getProduct, Product } from "../../lib/products";

type ProductPageParams = ParsedUrlQuery & {
  id: string;
};

type ProductPageProps = {
  product: Product;
};

const Product: FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>{product.title}</Title>
      </main>
      <p>{product.description}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async (context) => {
  const product = await getProduct(context.params.id);
  return {
    props: { product },
    revalidate: 5 * 60,
  };
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({ params: { id: product.id.toString() } })),
    fallback: false,
  };
};

export default Product;
