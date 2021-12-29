import React from "react";
import Head from "next/head";
import "../public/ctm.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,target-densitydpi=medium-dpi"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
