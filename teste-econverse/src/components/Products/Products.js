import CardProduct from "./CardProducts/CardProduct";
import { ContainerGeneral, ContainerProducts, ContainerInfo } from "./styled";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState("");
  const [tamanhoArray, setTamanhoArray] = useState(8);

  useEffect(() => {
    axios
      .get("vitrine.json")
      .then((resp) => {
        setData(resp.data.products);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const arrayProducts =
    data &&
    data
      .filter((product, index) => {
        return index < tamanhoArray;
      })
      .map((product) => {
        return (
          <CardProduct
            key={product.productName}
            productName={product.productName}
            description={product.descriptionShort}
            photo={product.photo}
            price={product.price}
          />
        );
      });

  const mostrarMaisProdutos = () => {
    setTamanhoArray(tamanhoArray + 4);
  };

  return (
    <ContainerGeneral>
      <ContainerInfo>
        <h1>
          INSTRUMENTOS <strong>DESTAQUE</strong>
        </h1>
        <h2>
          it is a long established fact that a reader will be destracted by the
          readable{" "}
        </h2>
        <ContainerProducts>{arrayProducts}</ContainerProducts>
        <button onClick={mostrarMaisProdutos}>Ver mais</button>
      </ContainerInfo>
    </ContainerGeneral>
  );
}

export default Products;
