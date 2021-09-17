import styled from "styled-components";

export const Card = styled.div `
  height: 352px;
  width: 250px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 174px;
    width: 218px;
  }
  h4 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0.05em;

    color: #041e50;
  }
  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #041e50;
  }
  p {
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 130%;

    text-align: center;
    letter-spacing: 0.05em;

    color: #041e50;
  }
`;