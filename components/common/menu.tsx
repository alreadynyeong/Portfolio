import { useRouter } from "next/router";
// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { NavMenu } from "@/data/Route";

type OnCloseFunction = () => void;

const MobileMenu = ({ onClose }: { onClose: OnCloseFunction }) => {
  const router = useRouter();
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const onClick = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <Container onClick={onClose}>
        <MenuContainer>
          {NavMenu.map((menu) => (
            <Menu key={menu.path} onClick={() => onClick(menu.path)}>
              {menu.title}
            </Menu>
          ))}
        </MenuContainer>
      </Container>
    </>
  );
};

export default MobileMenu;

const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
