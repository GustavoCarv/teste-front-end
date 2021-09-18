import styled from "styled-components";

export const ContainerGeneral = styled.div `
  width: 1280px;
 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const MainContainer = styled.div `
  margin-top: 100px;
  min-height: 300px;
  width: 1000px;
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainInfo = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: fit-content;

  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #041e50;
    margin-bottom: 33px;
  }
  p {
    width: 901px;
    height: 88px;
    word-wrap: break-word;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;
    text-align: center;

    color: #222222;
  }
`;