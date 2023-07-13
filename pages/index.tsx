import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const HI = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HI>안녕하세요. WEB 개발자 이민형입니다.</HI>
      </Container>
    </>
  );
}
