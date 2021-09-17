import React, { useState } from "react";
import CardModal from "./CardModal";
import { Card } from "./styled";

function CardProduct({ productName, description, photo, price }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card onClick={() => setShowModal(!showModal)}>
      <img src={photo} />
      <h4> {productName} </h4>
      <p>{description}</p>
      <h3>{price}</h3>
      {showModal ? (
        <CardModal
          productName={productName}
          description={description}
          photo={photo}
          price={price}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      ) : null}
    </Card>
  );
}

export default CardProduct;
