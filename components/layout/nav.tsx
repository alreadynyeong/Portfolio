import { useEffect, useState } from "react";

import router, { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { NavMenu } from "@/data/Route";

import Contact from "../common/contact";
import MobileMenu from "../common/menu";

const Nav = () => {
  const [show, setShow] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const path = useRouter().pathname;

  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

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
