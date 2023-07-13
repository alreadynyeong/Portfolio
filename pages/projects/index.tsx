import styled from "styled-components";

import ProjectBox from "@/components/common/projectBox";
import { ProjectList } from "@/data/Project";

const ProjectContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.7s;
  &:hover {
    transform: scale(1.1);
  }
`;
const Projects = () => {
  return (
    <div>
      {ProjectList.slice()
        .reverse()
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
