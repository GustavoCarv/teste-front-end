import styled from "styled-components";

export const MainDiv = styled.div`
  width: 1280px;
  height: 504px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  background-color: #0303d150;
`;

export const TextDiv = styled.div`
  width: 50%;
  border: 1px solid black;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.4em;
    color: black;
  }
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 47px;
    line-height: 100%;
    letter-spacing: 0.09em;
    overflow-y: hidden;
    color: black;
    display: flex;
    flex-direction: column;
  }
  strong {
    overflow-y: hidden;
  }
`;
