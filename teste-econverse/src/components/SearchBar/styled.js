import styled from "styled-components";

export const ContainterBar = styled.div `
  position: relative;
  height: 114px;
  display: flex;
  align-items: center;
  width: 1060px;
  justify-content: space-evenly;
  margin-top: 17px;
  border-bottom: 1px solid #78757538;
`;

export const CompanyTitle = styled.div `
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InputSearch = styled.input `
  width: 339px;
  height: 41px;
  left: 361px;
  padding: 16px;
  border: 1px solid #707070;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Cart = styled.div `
  position: absolute;
  width: 77px;
  height: 102px;
  left: 1063px;
  top: 37px;
  background: #041e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 7px;
    line-height: 100%;
    letter-spacing: 0.09em;
    color: #ffffff;
    margin-bottom: 8px;
  }
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.09em;

    color: #ffffff;
  }
`;