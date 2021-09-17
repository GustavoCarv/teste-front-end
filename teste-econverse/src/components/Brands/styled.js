import styled from "styled-components";

export const ContainerGeneral = styled.div `
  width: 1280px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const MainContainer = styled.div `
  margin-top: 100px;
  height: 300px;
  width: 1000px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 100%;
    letter-spacing: 0.1em;
    color: #041e50;
    text-align: center;
    margin-bottom: 19px;
  }
  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0.1em;
    color: #a5a5a5;
  }
`;