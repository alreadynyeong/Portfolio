import Image from "next/image";
import styled from "styled-components";

import { AwardList } from "@/data/Awards";

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 150px;
`;
const Box = styled.div`
  width: 80%;
  justify-content: center;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 30px;
  border-bottom: 2px solid black;
`;
const Content = styled.div`
  font-size: 1rem;
  padding: 30px;
`;
const Date = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-left: 10px;
`;
const Rank = styled.span`
  font-size: 1.1rem;
  color: green;
  font-weight: semi-bold;
  margin-left: 10px;
  margin-right: 10px;
`;
const About = () => {
  return (
    <Container>
      <Box>
        <Title>학력</Title>
        <Content>
          성신여자대학교 컴퓨터공학과<Date>2019.03 ~</Date>
        </Content>
      </Box>
      <Box>
        <Title>자격증</Title>
        <Content>
          정보처리기사<Date>2022.11.25</Date>
        </Content>
      </Box>
      <Box>
        <Title>수상</Title>
        {AwardList.slice()
          .reverse()
          .map((award) => (
            <>
              <Content key={award.title}>
                <div>
                  {award.title}
                  <Date>{award.date}</Date>
                  <Rank>{award.rank}</Rank>
                  <a href={`/projects/${award.projectNum}`}>
                    <Image
                      src={
                        "https://alreadynyeong.github.io/Portfolio/ArrowRight.png"
                      }
                      width={13}
                      height={13}
                      alt={""}
                    />
                  </a>
                </div>
              </Content>
            </>
          ))}
      </Box>
    </Container>
  );
};

export default About;
