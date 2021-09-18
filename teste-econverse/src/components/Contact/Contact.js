import CommentsBox from "../CommentsBox/CommentsBox";
import {
  ContainerGeneral,
  MainContainer,
  CompanyContainer,
  CompanyInfo,
  InstitutionalArea,
  AjudaArea,
  AtendimentoArea,
  PagamentoArea,
  SegurancaArea,
  NewsletterArea,
  BottomInfo,
} from "./styled";

function Contact() {
  return (
    <ContainerGeneral>
      <MainContainer>
        <CommentsBox />
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
            <PagamentoArea>
              <h2>FORMAS DE PAGAMENTO</h2>
            </PagamentoArea>
            <SegurancaArea>
              <h2>SEGURANCA</h2>
            </SegurancaArea>
            <NewsletterArea>
              <h1>
                ASSINE NOSSO <strong>NEWSLETTER</strong>
              </h1>
              <h1>E RECEBA NOVIDADES E PROMOCÕES</h1>
              <form>
                <input placeholder="SEU NOME" />
                <input placeholder="SEU EMAIL" />
              </form>
              <button>Enviar</button>
            </NewsletterArea>
          </CompanyInfo>
        </CompanyContainer>
      </MainContainer>
      <BottomInfo>
        <div>
          <p>
            NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os
            direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa
            Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ
            07.282.516/0001-15
          </p>
        </div>
        <div>ícone ícone</div>
      </BottomInfo>
    </ContainerGeneral>
  );
}

export default Contact;
