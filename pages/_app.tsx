import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";

import Nav from "@/components/layout/nav";
import "@/styles/globals.css";
import favIcon from "@/public/favIcon.ico";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favIcon.src} />
      </Head>
      <Nav />
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
