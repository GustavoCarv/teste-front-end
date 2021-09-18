import styled from "styled-components";

export const BoxCommentInfo = styled.div `
  position: absolute;
  width: 1002px;
  height: 175px;
  left: 139px;
  margin-bottom: 320px;
  background: #f7f7f7;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BoxComment = styled.div `
  width: 542px;
  height: 76px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #2f2f2f;
    max-width: 460px;
  }
`;

export const BoxPersonalInfo = styled.div `
  display: flex;
`;

export const BoxNameAndProfession = styled.div `
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #041e50;
    margin-bottom: 3px;
  }
  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #041e50;
  }
`;