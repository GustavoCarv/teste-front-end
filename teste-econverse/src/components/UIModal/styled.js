import styled from "styled-components";

export const Overlay = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Main = styled.div`
  width: 769px;
  height: 355px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: white;
  position: relative;
  img {
    width: 329px;
    height: 262.6px;
    object-fit: scale-down;
  }
  h4 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 100%;

    /* identical to box height, or 20px */
    letter-spacing: 0.05em;

    /* Primária */
    color: #041e50;
  }
  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 100%;

    /* identical to box height, or 20px */
    letter-spacing: 0.05em;

    /* Primária */
    color: #041e50;
  }
  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 150.5%;

    /* or 15px */
    letter-spacing: 0.05em;

    color: #222222;
  }
  h5 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;

    /* identical to box height, or 12px */
    letter-spacing: 0.05em;

    color: #041e50;
  }
  button {
    background: #041e50;
    border-radius: 5px;
    width: 164px;
    height: 40px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 100%;

    /* identical to box height, or 11px */
    letter-spacing: 0.05em;

    color: #ffffff;
  }
  padding: 1rem;
`;
