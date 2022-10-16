import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import PageWrapper from "../../components/PageWrapper";
import { ApiError, REVALIDATE_SECONDS } from "../../lib/api";
import { getProducts, getProduct, Product } from "../../lib/products";
import AddToCart from "../../components/AddToCart";

type ProductPageParams = ParsedUrlQuery & {
  id: string;
};

type ProductPageProps = {
  product: Product;
};

const Product: FC<ProductPageProps> = ({ product }) => {
  return (
    <PageWrapper title={product.title}>
      <div className='px-6 py-4 flex flex-col lg:flex-row'>
        <div>
          <Image src={product.pictureUrl} alt='' width={640} height={480} />
        </div>
        <div>
          <p className='flex-1 lg:ml-4 text-sm'>{product.description}</p>
        </div>
        <p className='text-lg font-bold mt-2'>{product.price}</p>
      </div>
      <AddToCart productId={product.id} />
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async (context) => {
  try {
    const product = await getProduct(context.params.id);
    return {
      props: { product },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return { notFound: true };
    throw error;
  }
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({ params: { id: product.id.toString() } })),
    fallback: "blocking", // will generate new page for unknown id and return to client
  };
};

export default Product;
