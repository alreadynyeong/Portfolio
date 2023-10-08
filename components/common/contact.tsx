import styled from "styled-components";

import { ContactData } from "@/data/Contact";

const Container = styled.div`
  position: fixed;
  width: 130px;
  height: 155px;
  border: 1px solid;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 80px;
  right: 20px;
  > div {
    margin: 7px;
  }
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;
const Contact = () => {
  return (
    <Container>
      {ContactData.map((contact) => (
        <div key={contact.title}>
          <a href={contact.path}>
            <Text>{contact.title}</Text>
          </a>
        </div>
      ))}
    </Container>
  );
};

export default Contact;
