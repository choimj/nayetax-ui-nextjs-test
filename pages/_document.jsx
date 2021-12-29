import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
const MODE = process.env.MODE;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            httpEquiv="p3p"
            content='CP="CAO DSP AND SO " policyref="/w3c/p3p.xml"'
          />
          <meta name="format-detection" content="telephone=no" />
          <meta
            httpEquiv="cache-control"
            content="no-store, no-cache, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-store, no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta name="author" content="Douzone" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          {MODE === "PRODUCTION" ? (
            <></>
          ) : (
            <>
              <link
                rel="stylesheet"
                type="text/css"
                href="http://172.16.114.131/css/svc/ctm.css"
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
