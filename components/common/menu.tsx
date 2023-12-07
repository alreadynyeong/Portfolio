import { useRouter } from "next/router";
// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { ContactData } from "@/data/Contact";
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
          <MenuBox>
            {NavMenu.map((menu) => (
              <Menu key={menu.path}>
                <div onClick={() => onClick(menu.path)}>{menu.title}</div>
              </Menu>
            ))}
          </MenuBox>

          <ContactBox>
            {ContactData.map((contact) => (
              <Contact key={contact.title}>
                <a href={contact.path}>{contact.title}</a>
              </Contact>
            ))}
            <Download href="https://drive.google.com/file/d/1J3MSbzoXUIJgAq4OWNblf1e7nIjD6Gon/view?usp=drive_link">
              PDF 다운로드
            </Download>
          </ContactBox>
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
  padding: 40px;
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
  gap: 60px;
  margin-right: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    margin-right: 0;
    padding: 100px 120px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Menu = styled.div`
  font-size: 3rem;
  font-weight: 600;
  width: 60%
  height: fit-content;
  
  border-bottom: 1px solid #2c422f;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 10px;

  transition: all 0.3s ease-in-out;


  @media (min-width: 768px) {
    font-size: 5rem;
    border-bottom: none;
    border-left: 2px solid #2c422f;
    padding-left: 30px;
  }

  > div {
    width: fit-content;
    &:hover {
      color: #2c422f;
      transform: rotateY(360deg);
    }
    transition: all 1s ease-in-out;
  }

  
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    justify-content: flex-start;
  }
`;

const Contact = styled.div`
  &:hover {
    color: #2c422f;
    letter-spacing: 20px;
  }
  transition: all 0.3s ease-in-out;
`;

const Download = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
  color: gray;
  border: 1px solid #2c422f;
  border-radius: 5px;
  padding: 5px;
  color: #2c422f;
  @media (prefers-color-scheme: dark) {
    color: #f5f5f5;
  }
`;
