import router from "next/router";
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
          <ProjectContainer
            key={project.id}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <ProjectBox project={project} />
          </ProjectContainer>
        ))}
    </div>
  );
};

export default Projects;
