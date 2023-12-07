import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>LeeMinHyeong</title>
        <meta name="description" content="Minhyeong's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favIcon.png" />
      </Head>
      <Container>
        <NameBox>
          <Name>LEE</Name>
          <Name> MIN</Name>
          <Name> HYEONG</Name>
        </NameBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 0px 50px;
`;

const Name = styled.div`
  display: flex;
  text-align: right;
  font-size: 4rem;
  font-weight: bold;
  @media (min-width: 550px) {
    font-size: 8rem;
  }
  @media (min-width: 768px) {
    font-size: 12rem;
  }
  transition: all 0.3s ease-in-out;
  color: #2c422f;
  @media (prefers-color-scheme: dark) {
    color: #f5f5f5;
  }
`;
