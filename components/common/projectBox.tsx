import Image from "next/image";
import styled from "styled-components";

import type { Project } from "@/data/Project";

const Container = styled.div`
  width: fit-content;
  margin: 50px;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 1px lightgray;
  cursor: pointer;
  border: 1px solid lightgray;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: semi-bold;
  margin-top: 10px;
  text-align: center;
`;
const ProjectBox = ({ project }: { project: Project }) => {
  return (
    <Container>
      <ImageBox>
        <Image
          src={`/projects/${project.id}.png`}
          width={300}
          height={200}
          alt={""}
        />
      </ImageBox>

      <Title>[ {project.title} ]</Title>
    </Container>
  );
};

export default ProjectBox;
