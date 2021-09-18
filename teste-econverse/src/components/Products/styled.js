import styled from "styled-components";

export const ContainerGeneral = styled.div `
  min-height: 1348px;
  width: 1280px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div `
  min-height: 900px;
  width: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 100%;
    letter-spacing: 0.1em;

    color: #041e50;
  }
  h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0.1em;
    color: #222222;
  }
  button {
    width: 154px;
    height: 52px;
    border: 1px solid #041e50;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
`;

export const ContainerProducts = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;
  min-height: 730px;
`;