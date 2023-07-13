import router from "next/router";
import styled from "styled-components";

import { NavMenu } from "@/constants/Route";

const Container = styled.div`
  padding: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  background-color: white;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding-left: 50px;
  margin-right: 40px;
`;
const Menu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border-radius: 51px;
  border: 1px solid;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
const Top = () => {
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
          <text>Lee min hyeong </text>
        </Title>
      </Container>
    </>
  );
};

export default Top;
