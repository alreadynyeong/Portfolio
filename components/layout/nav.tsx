import { useState } from "react";

import styled from "styled-components";

import MobileMenu from "../common/menu";

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
          <Line isHovered={isHovered} />
          <Line isHovered={isHovered} />
          <Line isHovered={isHovered} />
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

const Line = styled.div<{ isHovered: boolean }>`
  width: 50px;
  height: 3px;
  background-color: #2c422f;
  margin: 5px;
  transition: all 0.3s ease-in-out;
  @media (prefers-color-scheme: dark) {
    background-color: #f5f5f5;
  }

  &:nth-child(1) {
    width: ${({ isHovered }) => (isHovered ? "400%" : "400%")};
  }

  &:nth-child(2) {
    width: ${({ isHovered }) => (isHovered ? "300%" : "400%")};
  }

  &:nth-child(3) {
    width: ${({ isHovered }) => (isHovered ? "100%" : "400%")};
  }
`;
