import CardProduct from "./CardProducts/CardProduct";
import { ContainerGeneral, ContainerProducts, ContainerInfo } from "./styled";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState("");

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

  console.log(data);

  const arrayProducts =
    data &&
    data.map((product) => {
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
        <button>Ver mais</button>
      </ContainerInfo>
    </ContainerGeneral>
  );
}

export default Products;
