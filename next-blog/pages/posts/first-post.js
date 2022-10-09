import Head from "next/head";
import React from "react";
import { getPost } from "../../lib/posts";

const FirstPostPage = ({ title, body }) => {
  return (
    <>
      <Head>
        <title>First Post</title>
        <meta name='description' value='This is my blog' />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>{body} </p>
      </main>
    </>
  );
};

export default FirstPostPage;

export const getStaticProps = async () => {
  const post = await getPost("first-post");
  return {
    props: post,
  };
};
