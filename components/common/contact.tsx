import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 130px;
  height: 110px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
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
    font-size: 40px;
    color: green;
  }
`;
const Contact = () => {
  return (
    <Container>
      <div>
        <a href="https://github.com/alreadynyeong">
          <Text>Github</Text>
        </a>
      </div>
      <div>
        <a href="mailto:already.nyeong@gmail.com">
          <Text>Mail</Text>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
