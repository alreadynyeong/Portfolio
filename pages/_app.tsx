import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";

import Top from "@/components/layout/top";
import "@/styles/globals.css";
import { GlobalStyle } from "@/styles/globalStyle";

import type { AppProps } from "next/app";

const notoSansKr = Noto_Sans_KR({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>HOME</title>
      </Head>
      <Top />
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
