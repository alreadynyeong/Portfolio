import { useState } from "react";

import Head from "next/head";
import styled from "styled-components";

import { InfoData } from "@/data/Info";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-left: 30px;
`;
const HI = styled.div`
  font-size: 1.5rem;
  font-weight: semi-bold;
  padding: 40px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 20px;
  }
`;
const Blank = styled.div`
  display: inline-block;
  border: 2px solid;
  margin-top: 20px;
  margin-bottom: 15px;
  max-width: 400px;
  min-width: 300px;
  height: 70px;
  padding-left: 20px;
  font-size: 1.2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 2rem;
    min-width: 150px;
    width: 200px;
  }
`;
const Arrow = styled.div`
  padding-top: 16px;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 15px;
  margin-top: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;
export default function Home() {
  const [info, setInfo] = useState<number>(0);
  return (
    <>
      <Head>
        <title>LeeMinHyeong</title>
        <meta name="description" content="Minhyeong's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <HI>
            안녕하세요 :{")"}
            <div style={{ display: "flex" }}>
              <Blank>{InfoData[info]}</Blank>
              <Arrow
                onClick={() =>
                  info < InfoData.length - 1 ? setInfo(info + 1) : setInfo(0)
                }
              >
                ▹
              </Arrow>
            </div>
            <div style={{ textAlign: "right", paddingRight: "42px" }}>
              이민형입니다.
            </div>
          </HI>
        </div>
      </Container>
    </>
  );
}
