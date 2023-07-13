import Image from "next/image";
import styled from "styled-components";

import { ActivityList } from "@/data/Activity";
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
  font-size: 1.2rem;
  padding: 30px;
  padding-bottom: 50px;
  border-bottom: 1px solid lightgray;
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
  border-left: 3px solid black;
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

const Activity = () => {
  return (
    <Container>
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
                      <Project>{content.project}</Project>
                      <a href={`/Portfolio/projects/${content.projectNum}`}>
                        <Image
                          src={
                            "https://alreadynyeong.github.io/Portfolio/ArrowRight.png"
                          }
                          width={13}
                          height={13}
                          alt={">"}
                        />
                      </a>
                    </div>
                  </Actiivty>
                ))}
              </Activitys>
            </Content>
          ))}
      </Box>
    </Container>
  );
};

export default Activity;
