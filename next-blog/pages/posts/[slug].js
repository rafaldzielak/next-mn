import Head from "next/head";
import React from "react";
import { getPost, getSlugs } from "../../lib/posts";

const PostPage = ({ title, body, date }) => {
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

export default PostPage;

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await getPost(slug);
  return {
    props: post,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // what to do when none of the paths matched the url - false - 404
  };
};
