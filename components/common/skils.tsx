import styled from "styled-components";

const Skill = styled.div`
  display: inline-block;
  border: 1px solid gray;
  margin-bottom: 50px;
  margin-right: 10px;
  padding: 7px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: green;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Skils = ({ skills }: { skills: string[] | undefined }) => {
  return (
    <div>
      {skills?.map((s: any) => (
        <Skill key={s}>{s}</Skill>
      ))}
    </div>
  );
};

export default Skils;
