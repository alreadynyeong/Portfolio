import Head from "next/head";
import styled from "styled-components";

import { ActivityList } from "@/data/Activity";

const Activity = () => {
  return (
    <>
      <Head>
        <title>ACTIVITY</title>
        <meta name="description" content="Minhyeong's Activity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favIcon.png" />
      </Head>
      <Container>
        <Top>ACTIVITY</Top>
        <Box>
          <Title>활동</Title>
          {ActivityList.slice()
            .reverse()
            .map((activity) => (
              <Content key={activity.id}>
                [ {activity.title} ] <Date>{activity.date}</Date>
                <Role>{activity.role}</Role>
                <Activitys>
                  {activity.content.map((content) => (
                    <Actiivty key={content.id}>
                      {content.text}
                      <div>
                        <a href={`/Portfolio/project?id=${content.projectNum}`}>
                          <Project>{content.project}</Project>
                        </a>
                      </div>
                    </Actiivty>
                  ))}
                </Activitys>
              </Content>
            ))}
        </Box>
      </Container>
    </>
  );
};

export default Activity;

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
  font-size: 1.2rem;
  padding: 30px;
  padding-bottom: 50px;
  border-bottom: 1px solid;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Date = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-left: 10px;
`;
const Role = styled.div`
  font-size: 1rem;
  margin-top: 30px;
`;
const Activitys = styled.div`
  border-left: 3px solid;
`;
const Actiivty = styled.div`
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 20px;
`;
const Project = styled.span`
  font-size: 0.9rem;
  margin-right: 7px;
  color: green;
`;
