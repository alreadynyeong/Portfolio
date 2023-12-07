import { useState } from "react";

import styled from "styled-components";

import MobileMenu from "../common/menu";

interface LineProps {
  ishovered: string;
}
const Nav = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <Container>
        <ImageBox
          onClick={() => setMenu(!menu)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={() => setIsHovered(true)}
        >
          <Line ishovered={isHovered.toString()} />
          <Line ishovered={isHovered.toString()} />
          <Line ishovered={isHovered.toString()} />
        </ImageBox>
        {menu && (
          <MobileMenu
            onClose={() => {
              setMenu(false);
            }}
          />
        )}
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
  overflow: hidden;
  background-color: transparent;
  z-index: 10000;
`;
const ImageBox = styled.div`
  display: flex;
  font-size: 1.5rem;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  padding: 20px;
`;

const Line = styled.div<LineProps>`
  width: 50px;
  height: 5px;
  background-color: #2c422f;
  border: 1px solid #f5f5f5;
  margin: 5px;
  transition: all 0.3s ease-in-out;
  @media (prefers-color-scheme: dark) {
    background-color: #f5f5f5;
    border: 1px solid #2c422f;
  }

  &:nth-child(1) {
    width: ${({ ishovered }) => (ishovered === "true" ? "400%" : "400%")};
  }

  &:nth-child(2) {
    width: ${({ ishovered }) => (ishovered === "true" ? "300%" : "400%")};
  }

  &:nth-child(3) {
    width: ${({ isHovered }) => (isHovered === "true" ? "100%" : "400%")};
  }
`;
