import styled from "styled-components";

export const Card = styled.div `
  height: 352px;
  width: 250px;
 

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  :hover {box-shadow: rgba(255, 255, 255, 0.1) 
    0px 1px 1px 0px inset, 
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

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