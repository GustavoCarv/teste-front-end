import {
  ContainerGeneral,
  MainContainer,
  CompanyContainer,
  CompanyInfo,
  InstitutionalArea,
  AjudaArea,
  AtendimentoArea,
} from "./styled";

function Contact() {
  return (
    <ContainerGeneral>
      <MainContainer>
        oi
        <CompanyContainer>
          <CompanyInfo>
            <InstitutionalArea>
              <h2>INSTITUCIONAL</h2>
              <h4>QUEM SOMOS </h4>
              <h4>NOSSAS LOJAS</h4>
            </InstitutionalArea>
            <AtendimentoArea>
              <h2>ATENDIMENTO</h2>
              <h4>FALE CONOSCO </h4>
              <h4>VENDAS@NINJASOM.COM.BR </h4>
            </AtendimentoArea>
            <AjudaArea>
              <h2>AJUDA E SUPORTE</h2>
              <h4>POLÍTICA DE PRIVACIDADE </h4>
              <h4>POLÍTICA DE TROCAS</h4>
              <h4>PRAZOS DE ENTREGA</h4>
              <h4>TERMOS DE USO</h4>
            </AjudaArea>
          </CompanyInfo>
        </CompanyContainer>
      </MainContainer>
    </ContainerGeneral>
  );
}

export default Contact;
