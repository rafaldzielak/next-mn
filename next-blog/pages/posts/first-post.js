import Head from "next/head";
import React from "react";
import { getPost } from "../../lib/posts";

const FirstPostPage = ({ title, body, date }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' value='This is my blog' />
      </Head>
      <main>
        <p>{date}</p>
        <h1>{title}</h1>
        <article dangerouslySetInnerHTML={{ __html: body }} />
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
