import styled from "styled-components";

export const CardContainer = styled.div `
  height: 190px;
  width: 1280px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 100%;

    /* identical to box height, or 14px */
    letter-spacing: 0.09em;

    color: #000000;
  }
`;