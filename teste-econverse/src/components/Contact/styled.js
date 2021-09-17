import styled from "styled-components";

export const ContainerGeneral = styled.div`
  width: 1280px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const MainContainer = styled.div`
  margin-top: 100px;
  min-height: 600px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CompanyContainer = styled.div`
  height: 384px;
  border: 1px solid black;
  background: #041e50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyInfo = styled.div`
  height: 250px;
  border: 1px solid black;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 250px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "institucional ajuda pagamento newsletter"
    "atendimento ajuda segurança newsletter";
`;

export const InstitutionalArea = styled.div`
  grid-area: institucional;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */

    color: #ffffff;
  }
  h4 {
    margin-bottom: 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }
`;

export const AjudaArea = styled.div`
  grid-area: ajuda;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */

    color: #ffffff;
  }
  h4 {
    margin-bottom: 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }
`;

export const AtendimentoArea = styled.div`
  grid-area: atendimento;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */

    color: #ffffff;
  }
  h4 {
    margin-bottom: 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }
`;
