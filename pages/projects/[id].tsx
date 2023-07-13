import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import Parts from "@/components/common/part";
import Skils from "@/components/common/skils";
import { ProjectList } from "@/data/Project";

const Container = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 70px;
  margin-bottom: 150px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 30px;
`;
const ImageBox = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 1px lightgray;
  border: 1px solid lightgray;
  margin: 0 auto;
`;
const Content = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-top: 13px;
`;
const Date = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-left: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  margin-bottom: 30px;
  padding-right: 30px;
`;
const RoleBox = styled.div`
  margin-top: 30px;
  align-items: center;
  > p {
    white-space: pre-line;
    line-height: 2;
  }
`;
const SmallTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 10px;
  margin-top: 40px;
  padding-bottom: 40px;
  color: gray;
  border-bottom: 1px solid gray;
`;
const Detail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const data = ProjectList.find((p) => p.id == id);
  return (
    <Container>
      <Top>
        <Title>
          {data?.title} <Date>{data?.duration}</Date>
        </Title>
        <div>
          {data?.git && (
            <a href={data?.git} target="_blank">
              GIT
            </a>
          )}
          {data?.git && data?.link && <span> | </span>}
          {data?.link && (
            <a href={data?.link} target="_blank">
              LINK
            </a>
          )}
        </div>
      </Top>
      <Parts part={data?.part} />
      <Skils skills={data?.skills} />
      <ImageBox>
        <Image
          src={`projects/${data?.id}.png`}
          width={500}
          height={300}
          alt={""}
        />
      </ImageBox>
      <Content>
        <SmallTitle>{data?.description}</SmallTitle>
        <RoleBox>
          <p>{data?.role}</p>
        </RoleBox>
      </Content>
    </Container>
  );
};

export default Detail;
