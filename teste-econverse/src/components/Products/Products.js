import { ContainerGeneral, ContainerProducts, ContainerInfo } from "./styled";

function Products() {
  return (
    <ContainerGeneral>
      <ContainerInfo>
        <div>INSTRUMENTOS DESTAQUE</div>
        <ContainerProducts>
          <p>Produtos</p>
          <p>Produtos</p>
          <p>Produtos</p>
          <p>Produtos</p>
        </ContainerProducts>
        <div>Ver mais</div>
      </ContainerInfo>
    </ContainerGeneral>
  );
}

export default Products;
