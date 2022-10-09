import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
