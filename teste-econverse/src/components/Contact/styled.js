import styled from "styled-components";

export const ContainerGeneral = styled.aside `
  width: 1280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const MainContainer = styled.div `
  margin-top: 100px;
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const BottomInfo = styled.footer `
  height: 70px;

  width: 950px;
  margin-right: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  p {
    max-width: 503px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #010101;
  }
`;

export const CompanyContainer = styled.div `
  height: 384px;

  background: #041e50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyInfo = styled.div `
  margin-top: 70px;
  height: 250px;

  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 300px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "institucional ajuda pagamento newsletter"
    "atendimento ajuda seguranca newsletter";
`;

export const InstitutionalArea = styled.nav `
  grid-area: institucional;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;


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

export const AjudaArea = styled.nav `
  grid-area: ajuda;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
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

export const AtendimentoArea = styled.nav `
  grid-area: atendimento;

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
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

export const PagamentoArea = styled.nav `
  grid-area: pagamento;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "payment payment payment"; 

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    grid-area: payment;
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

export const SegurancaArea = styled.nav `
  grid-area: seguranca;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "payment payment payment"; 

  h2 {
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    grid-area: payment;
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

export const NewsletterArea = styled.div `
  grid-area: newsletter;
  width: 286px;
  height: 239px;
  background: #ffffff;
  border-radius: 6px;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #041e50;
  }
  input {
    border: none;
    border-bottom: 0.6px solid #041e50;
    width: 214px;
    margin: 8px;
    padding: 8px;
  }
  button {
    width: 111px;
    height: 35px;
    border: 1px solid #041e50;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #041e50;
  }
`;