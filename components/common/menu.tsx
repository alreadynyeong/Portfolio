import { useRouter } from "next/router";
import styled from "styled-components";

import { ContactData } from "@/data/Contact";
import { NavMenu } from "@/data/Route";

type OnCloseFunction = () => void;

const MobileMenu = ({ onClose }: { onClose: OnCloseFunction }) => {
  const router = useRouter();
  const onClick = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <Container onClick={onClose}>
        <MenuContainer>
          <Bar />
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
            <Download href="https://drive.google.com/file/d/1quDM7yT85MEPiLGx6TKOYIGZ7CWFVqbT/view?usp=sharing">
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
  height: 100%;
  overflow-y: scroll;
  z-index: 100;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 400px) {
    margin-top: 0;
  }
  padding: 40px;
  background-color: #2c422f;
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
  background-color: #2c422f;
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
  background-color: #2c422f;
  gap: 20px;
`;

const Bar = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    width: 5px;

    border: 1px solid #f5f5f5;
    height: 100vh;
    background-color: #2c422f;
  }
`;

const Menu = styled.div`
  background-color: #2c422f;
  font-size: 3rem;
  font-weight: 600;
  width: 60%
  height: fit-content;
  
  border-bottom: 1px solid #f5f5f5;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 10px;

  transition: all 0.5s ease-in-out;


  @media (min-width: 768px) {
    font-size: 5rem;
    border-bottom: none;
    padding-left: 30px;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }

  > div {
    background-color: #2c422f;
    color: #f5f5f5;
    &:hover {
      color: lightgray;
    }
    width: fit-content;
    animation: fadeIn 2s ease-in-out;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: rotateY(180deg);
      }
      100% {
        opacity: 1;
        transform: rotateY(360deg);
      }
    }
  }


  
`;

const ContactBox = styled.div`
  background-color: #2c422f;
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
  background-color: #2c422f;
  &:hover {
    color: #2c422f;
    letter-spacing: 20px;
  }
  transition: all 0.3s ease-in-out;
  animation: fadeInTop 2s ease-in-out;
  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  > a {
    color: #f5f5f5;
    text-decoration: none;
    background-color: #2c422f;
  }
`;

const Download = styled.a`
  background-color: #2c422f;
  cursor: pointer;
  font-size: 0.8rem;
  color: gray;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 5px;
  color: #f5f5f5;
`;
