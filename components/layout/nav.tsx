import { useState } from "react";

import styled from "styled-components";

import MobileMenu from "../common/menu";

const Nav = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <Container>
        <ImageBox onClick={() => setMenu(!menu)}>MENU</ImageBox>
        {menu && (
          <MobileMenu
            onClose={() => {
              setMenu(false);
            }}
          />
        )}
        <Title>
          <text>Lee Min Hyeong </text>
        </Title>
      </Container>
    </>
  );
};

export default Nav;

const Container = styled.div`
  padding: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  overflow: hidden;
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
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
`;
