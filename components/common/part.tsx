import styled from "styled-components";

const Part = styled.div`
  display: inline-block;
  border: 1px solid gray;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 7px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: darkgreen;
`;

const Parts = ({ part }: { part: string[] | undefined }) => {
  return (
    <div>
      {part?.map((p: any) => (
        <Part key={p}>{p}</Part>
      ))}
    </div>
  );
};

export default Parts;
