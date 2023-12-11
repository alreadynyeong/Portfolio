import { useState } from "react";

import styled from "styled-components";

import MobileMenu from "../common/menu";

interface LineProps {
  ishovered?: string;
  isClicked?: string;
}
const Nav = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <Container>
        <ImageBox
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
          isClicked={isClicked.toString()}
          ishovered={isHovered.toString()}
        >
          <Line
            ishovered={isHovered.toString()}
            isClicked={isClicked.toString()}
          />
          {!isClicked && (
            <>
              <Line ishovered={isHovered.toString()} />
              <Line ishovered={isHovered.toString()} />
            </>
          )}
          {isClicked && (
            <MobileMenu
              onClose={() => {
                setIsHovered(false);
                setIsClicked(false);
              }}
            />
          )}
        </ImageBox>
      </Container>
    </>
  );
};

export default Nav;

const Container = styled.div`
  padding: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  overflow: hidden;
  background-color: transparent;
  z-index: 10000;
`;
const ImageBox = styled.div<LineProps>`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  padding: 20px;
  background-color: ${({ isClicked }) =>
    isClicked === "true" ? "#2c422f" : "transparent"};
  width: ${({ isClicked, ishovered }) =>
    isClicked === "true" || ishovered === "true" ? "100%" : "fit-content"};
  height: ${({ isClicked }) =>
    isClicked === "true" ? "100vh" : "fit-content"};
  overflow: none;
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
    margin-left: ${({ isClicked }) => (isClicked === "true" ? "-20px" : "5px")};
    width: ${({ ishovered }) => (ishovered === "true" ? "1500px" : "50px")};
    animation: ${({ isClicked }) =>
      isClicked === "true" ? "down 0.5s ease-in-out" : "none"};
  }

  @keyframes down {
    0% {
      transform: translateY(0deg) rotate(0deg);
      margin-bottom: 0px;
    }
    100% {
      transform: translateY(180deg) rotate(180deg);
      margin-bottom: 100vh;
    }
  }

  &:nth-child(2) {
    width: ${({ ishovered }) => (ishovered === "true" ? "0" : "50px")};
  }

  &:nth-child(3) {
    width: ${({ ishovered }) => (ishovered === "true" ? "0" : "50px")};
  }
`;
