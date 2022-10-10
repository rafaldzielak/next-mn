import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name='description' value='This is my blog' />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={title}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};

export default HomePage;
