import styled from "styled-components";

export const MainDiv = styled.div `
  width: 1280px;
  height: 386px;

  display: flex;
  background-color: #0000ff67;
`;

export const TextDiv = styled.div `
  width: 50%;

  height: px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 75px;
  margin-bottom: 58px;
  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0.4em;
    color: black;
  }
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 41px;
    line-height: 100%;
    letter-spacing: 0.09em;
    overflow-y: hidden;
  }
  button {
    border: 1px solid #ffffff;
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    border-radius: 5px;
    width: 154px;
    height: 52px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 100%;
    /* identical to box height, or 13px */
    letter-spacing: 0.1em;
  }
`;