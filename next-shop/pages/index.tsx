import { GetStaticProps } from "next";
import { FC } from "react";
import PageWrapper from "../components/PageWrapper";
import ProductCard from "../components/ProductCard";
import { REVALIDATE_SECONDS } from "../lib/api";
import { getProducts, Product } from "../lib/products";

type Props = {
  products: Product[];
};

const Home: FC<Props> = ({ products }) => {
  return (
    <PageWrapper title='Indoor Plants'>
      <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </PageWrapper>
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
