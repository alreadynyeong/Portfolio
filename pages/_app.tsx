import Head from "next/head";

import Top from "@/components/layout/top";
import "@/styles/globals.css";
import { GlobalStyle } from "@/styles/globalStyle";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>HOME</title>
      </Head>
      <Top />
      <Component {...pageProps} />
    </>
  );
}
