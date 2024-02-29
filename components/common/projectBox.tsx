import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import type { Project } from "@/data/Project";

const ProjectBox = ({ project }: { project: Project }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Container main={project.main === true}>
      <ImageBox>
        <Image
          src={`https://alreadynyeong.github.io/Portfolio/projects/${project.id}.png`}
          width={isMobile ? 250 : 400}
          height={isMobile ? 150 : 280}
          alt={""}
        />
      </ImageBox>

      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Skills>
          {project.skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>
      </Content>
    </Container>
  );
};

export default ProjectBox;

const Container = styled.div<{ main: boolean }>`
  margin: 50px;
  display: flex;
  width: 600px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 400px;
    height: 210px;
  }
  @media (max-width: 400px) {
    display: block;
    width: 280px;
    height: 310px;
  }
  border: ${(props) =>
    props.main ? "2px dashed #2c422f" : "2px solid #f5f5f5"};
  padding: 10px;
  border-radius: 10px;
`;

const ImageBox = styled.div`
  width: 400px;
  height: 280px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid lightgray;
  &:hover {
    rotate: 10deg;
    transition: 0.5s;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
  @media (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding-left: 10px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

const Title = styled.div`
  height: fit-content;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.div`
  height: fit-content;
  font-size: 0.8rem;
  margin-top: 10px;
  text-align: right;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  background-color: transparent;
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 0.7rem;
  margin: 2px;
  padding: 2px 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
