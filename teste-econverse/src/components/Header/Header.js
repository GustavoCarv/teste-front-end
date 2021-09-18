import React from "react";
import { ContainerHeader, ItemHeader } from "./styled";

function Header() {
  return (
    <ContainerHeader>
      <ItemHeader>
        <p>COMPRA 100%</p>
      </ItemHeader>
      <ItemHeader>
        <p>TROCA GRATÍS</p>
      </ItemHeader>
      <ItemHeader>
        <p>5X SEM JUROS</p>
      </ItemHeader>
      <ItemHeader>
        <p>ENTREGAS EM TODO O BRASIL</p>
      </ItemHeader>
    </ContainerHeader>
  );
}

export default Header;
