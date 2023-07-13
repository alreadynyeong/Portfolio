import { useState } from "react";

import Image from "next/image";
import router, { useRouter } from "next/router";
import styled from "styled-components";

import { NavMenu } from "@/data/Route";

import Contact from "../common/contact";

const Container = styled.div`
  padding: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  background-color: white;
  overflow: hidden;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-left: 30px;
  margin-right: 10px;
`;
const Menu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  gap: 10px;
  > div {
    padding-top: 10px;
`;
const Top = () => {
  const [show, setShow] = useState<boolean>(false);

  const path = useRouter().pathname;
  console;
  return (
    <>
      <Container>
        <MenuContainer>
          {NavMenu.map((menu) => (
            <Menu key={menu.title} onClick={() => router.push(menu.path)}>
              {path === menu.path ? (
                <text style={{ color: "green" }}>{menu.title}</text>
              ) : (
                <text>{menu.title}</text>
              )}
            </Menu>
          ))}
        </MenuContainer>
        <Title>
          <text>Lee Min Hyeong </text>
          <div onClick={() => setShow(!show)}>
            <Image
              src={`Arrow${show ? "Up" : "Down"}.png`}
              alt={"ArrowDown"}
              width={30}
              height={30}
            />
          </div>
        </Title>
        {show && <Contact />}
      </Container>
    </>
  );
};

export default Top;
