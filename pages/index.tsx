import React from "react";

import Head from "next/head";
import styled from "styled-components";

import { HomeData } from "@/data/Home";

type ActiveProps = {
  active: number;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>LeeMinHyeong</title>
        <meta name="description" content="Minhyeong's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favIcon.png" />
      </Head>
      <Container>
        {HomeData.map((section) => (
          <Section active={section.id} key={section.id}>
            <Arrow>↓</Arrow>
            <NameBox>
              {section.text.map((text, textIndex) => (
                <Name key={textIndex}>{text}</Name>
              ))}
            </NameBox>
          </Section>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -120px;
  height: fit-content;
`;

const Section = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.active === 1 ? "#2c422f" : "transparent"};
  > div {
    > div {
      color: ${(props) => (props.active === 1 ? "#f5f5f5" : "#2c422f")};
    }
  }
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  padding: 120px 50px 0 50px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
`;

const Name = styled.div`
  display: flex;
  text-align: right;
  font-size: 3rem;
  font-weight: bold;
  background-color: transparent;
  @media (min-width: 550px) {
    font-size: 7rem;
  }
  @media (min-width: 768px) {
    font-size: 11rem;
  }
  transition: all 0.3s ease-in-out;
  color: #2c422f;
  @media (prefers-color-scheme: dark) {
    color: #f5f5f5;
  }
`;

const Arrow = styled.div`
  width: fit-content;
  height: fit-content;

  font-size: 6rem;
  font-weight: bold;
  -webkit-text-stroke: 1px #f5f5f5;

  position: absolute;
  top: 100px;
  left: 50px;

  background-color: transparent;

  @media (min-width: 550px) {
    font-size: 7rem;
  }
  @media (min-width: 768px) {
    font-size: 8rem;
  }
  transition: all 0.3s ease-in-out;
  color: #2c422f;
  @media (prefers-color-scheme: dark) {
    -webkit-text-stroke: 1px #f5f5f5;
  }
`;
