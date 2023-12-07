import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import Parts from "@/components/common/part";
import Skils from "@/components/common/skils";
import { ProjectList } from "@/data/Project";

const Detail = () => {
  const router = useRouter();
  const id = Number(router.query.id) || router.query?.id;
  const data = ProjectList.find((p) => p.id == id);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (!data) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }
  return (
    <>
      <Head>
        <title>PJOJECT</title>
        <meta name="description" content="Minhyeong's Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favIcon.png" />
      </Head>
      <Container>
        <Top>
          <Title>
            {data?.title} <Date>{data?.duration}</Date>
          </Title>
          <div>
            {data.git && (
              <a href={data.git} target="_blank" rel="noopener noreferrer">
                GIT
              </a>
            )}
            {data.git && data.link && <span> | </span>}
            {data.link && (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                LINK
              </a>
            )}
          </div>
        </Top>
        <Parts part={data?.part} />
        <Skils skills={data?.skills} />
        {!(data?.id === 10) && (
          <ImageBox>
            <Image
              src={`https://alreadynyeong.github.io/Portfolio/projects/${data?.id}.png`}
              width={isMobile ? 300 : 500}
              height={isMobile ? 200 : 300}
              alt={"사진 준비중"}
            />
          </ImageBox>
        )}
        <Content>
          <SmallTitle>{data?.description}</SmallTitle>
          <RoleBox>
            <p>🤼{data?.people}</p>
            <p>🧩{data?.role}</p>
            <p>💡{data?.result}</p>
          </RoleBox>
        </Content>
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  padding: 0 10%;
  margin-top: 70px;
  padding-bottom: 500px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const ImageBox = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 1px lightgray;
  border: 1px solid lightgray;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
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
  border-bottom: 2px solid;
  margin-bottom: 30px;
  padding-right: 30px;
`;
const RoleBox = styled.div`
  margin-top: 30px;
  align-items: center;
  > p {
    white-space: pre-line;
    line-height: 1.8;
    margin-bottom: 50px;
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
