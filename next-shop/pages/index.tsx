import Head from "next/head";
import { FC } from "react";
import Title from "../components/Title";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='px-6 py-4'>
        <Title>Next shop</Title>
      </main>
    </>
  );
};

export default Home;
