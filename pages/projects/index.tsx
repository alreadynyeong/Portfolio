import { useState } from "react";

import styled from "styled-components";

import ProjectBox from "@/components/common/projectBox";
import { ProjectList } from "@/data/Project";

interface SkillProps {
  active: boolean;
}

const ProjectContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
`;
const Skills = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  overflow-x: scroll;
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
`;
const Projects = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div style={{ paddingBottom: 500 }}>
      <div>
        <Skills>
          🏷️
          <Skill
            onClick={() => toggleSkill("React")}
            active={selectedSkills.includes("React")}
          >
            React
          </Skill>
          <Skill
            onClick={() => toggleSkill("Next")}
            active={selectedSkills.includes("Next")}
          >
            Next
          </Skill>
          <Skill
            onClick={() => toggleSkill("React-native")}
            active={selectedSkills.includes("React-native")}
          >
            React-native
          </Skill>
          <Skill
            onClick={() => toggleSkill("Node.js")}
            active={selectedSkills.includes("Node.js")}
          >
            Node.js
          </Skill>
        </Skills>
      </div>
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
    </div>
  );
};

export default Projects;
