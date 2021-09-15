import styled from "styled-components";

export const ContainerGeneral = styled.div`
  height: 1048px;
  width: 1280px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  height: 800px;
  width: 1000px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid black;
  width: 100%;
  height: 650px;
`;
