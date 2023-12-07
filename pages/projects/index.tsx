import { useEffect, useState } from "react";

import Head from "next/head";
import styled from "styled-components";

import ProjectBox from "@/components/common/projectBox";
import { ProjectList } from "@/data/Project";

interface SkillProps {
  active: boolean;
}

const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const [dynamicHeight, setDynamicHeight] = useState(0);

  useEffect(() => {
    const calculateDynamicHeight = () => {
      const windowHeight = window.innerHeight || 0;
      const calculatedHeight = windowHeight - 300;
      setDynamicHeight(calculatedHeight);
    };

    calculateDynamicHeight();

    window.addEventListener("resize", calculateDynamicHeight);

    return () => {
      window.removeEventListener("resize", calculateDynamicHeight);
    };
  }, []);

  return (
    <>
      <Head>
        <title>PJOJECTS</title>
        <meta name="description" content="Minhyeong's Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favIcon.png" />
      </Head>
      <Container>
        <Title>PROJECTS</Title>
        <div>
          <Skills>
            FILTER
            <Skill
              onClick={() => toggleSkill("React")}
              active={selectedSkills.includes("React")}
            >
              REACT
            </Skill>
            <Skill
              onClick={() => toggleSkill("Next")}
              active={selectedSkills.includes("Next")}
            >
              NEXT
            </Skill>
            <Skill
              onClick={() => toggleSkill("React-native")}
              active={selectedSkills.includes("React-native")}
            >
              REACT-NATIVE
            </Skill>
            <Skill
              onClick={() => toggleSkill("Node.js")}
              active={selectedSkills.includes("Node.js")}
            >
              NODE.JS
            </Skill>
          </Skills>
        </div>
        <ScrollContainer style={{ height: dynamicHeight }}>
          {ProjectList.slice()
            .reverse()
            .filter(
              (project) =>
                selectedSkills.length === 0 ||
                selectedSkills.some((skill) => project.skills.includes(skill))
            )
            .map((project) => (
              <ProjectContainer key={project.id}>
                <a href={`/Portfolio/project?id=${project.id}`}>
                  <ProjectBox project={project} />
                </a>
              </ProjectContainer>
            ))}
        </ScrollContainer>
      </Container>
    </>
  );
};

export default Projects;

const Container = styled.div`
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ProjectContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-left: 50px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Skills = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  overflow-x: scroll;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Skill = styled.div<SkillProps>`
  color: ${(props) => (props.active ? "green" : "gray")};
  display: inline-block;
  border: 1px solid ${(props) => (props.active ? "green" : "gray")};
  margin-left: 10px;
  padding: 7px;
  border-radius: 12px;
  font-size: 0.8rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
