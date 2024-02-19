import Head from "next/head";
import styled from "styled-components";

import { AwardList } from "@/data/Awards";

const About = () => {
  return (
    <>
      <Head>
        <title>ACTIVITY</title>
        <meta name="description" content="Minhyeong's Activity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favIcon.png" />
      </Head>
      <Container>
        <Top>ABOUT</Top>
        <Box>
          <Title>학력</Title>
          <Content>
            성신여자대학교 컴퓨터공학과 졸업<Date>2019.03 ~ 2024.02</Date>
            {/* 컴퓨터공학과<Date>2019.03 ~</Date> */}
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
                <Content key={award.id}>
                  <a href={`/Portfolio/project?id=${award.projectNum}`}>
                    <RankBox>
                      <div>{award.title}</div>
                      <Date>{award.date}</Date>
                      <Rank>{award.rank}</Rank>
                    </RankBox>
                  </a>
                </Content>
              </>
            ))}
        </Box>
        <Box>
          <Title>스킬</Title>
          <Content>
            <Skill>
              Skill
              <div>
                <div>React.js</div>
                <div>Next.js</div>
                <div>ReactNative</div>
                <div>Express</div>
              </div>
            </Skill>
            <Skill>
              Language
              <div>
                <div>JavaScript</div>
                <div>TypeScript</div>
                <div>Python</div>
              </div>
            </Skill>
            <Skill>
              Tool
              <div>
                <div>Git/GitHub</div>
                <div>Figma</div>
                <div>Discord/Slack</div>
                <div>Jira/Confluence</div>
              </div>
            </Skill>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
`;
const Top = styled.div`
  font-size: 9rem;
  font-weight: bold;
  padding-right: 10%;
  text-align: right;
  letter-spacing: -0.5rem;
  &:hover {
    letter-spacing: 2rem;
  }
  transition: all 0.5s;
  animation: Top 3s;
  animation-fill-mode: forwards;
  @keyframes Top {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    &:hover {
      letter-spacing: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 3rem;
    &:hover {
      letter-spacing: 0.5rem;
    }
  }
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
  border-bottom: 2px solid;
`;
const Content = styled.div`
  font-size: 1rem;
  padding: 30px;
`;
const Date = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-left: 10px;
  @media (max-width: 550px) {
    margin-left: 0px;
  }
`;
const RankBox = styled.div`
  @media (min-width: 550px) {
    display: flex;
    align-items: center;
  }
`;
const Rank = styled.span`
  font-size: 1.1rem;
  color: green;
  margin-left: 10px;
  margin-right: 10px;
`;
const Skill = styled.div`
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: bold;
  > div {
    margin-left: 20px;
    display: flex;
    overflow: auto;
    gap: 20px;
    padding-bottom: 10px;
    > div {
      font-weight: normal;
      font-size: 0.9rem;
      color: gray;
      margin-top: 10px;
    }
  }
`;
