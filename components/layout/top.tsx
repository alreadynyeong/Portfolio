import { useState } from "react";

import Image from "next/image";
import router from "next/router";
import styled from "styled-components";

import { NavMenu } from "@/constants/Route";

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
  gap: 40px;
  padding-left: 30px;
  margin-right: 10px;
`;
const Menu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: 1px solid;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
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
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <Container>
        <MenuContainer>
          {NavMenu.map((menu) => (
            <Menu key={menu.title} onClick={() => router.push(menu.path)}>
              <text>{menu.title}</text>
            </Menu>
          ))}
        </MenuContainer>
        <Title>
          <text>Lee Min Hyeong </text>
          <div onClick={() => setShow(!show)}>
            <Image
              src={`/arrow${show ? "Up" : "Down"}.png`}
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
