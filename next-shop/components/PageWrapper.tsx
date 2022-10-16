import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Title from "./Title";

type PageProps = PropsWithChildren & {
  title: string;
};

const PageWrapper: FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Next Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='px-6 py-4'>
        <Title>{title}</Title>
      </main>
      {children}
    </>
  );
};

export default PageWrapper;
