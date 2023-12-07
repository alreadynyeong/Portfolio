import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";

import Nav from "@/components/layout/nav";
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
        <title>LeeMinHyeong</title>
        <meta name="description" content="Minhyeong's Portfolio" />
        <link rel="icon" href="/favIcon.png" />
      </Head>
      <Nav />
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
