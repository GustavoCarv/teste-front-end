import React from "react";
import UIModal from "../../UIModal/UIModal";
import { ModalInfo } from "./styledModal";

function CardModal({
  productName,
  description,
  photo,
  price,
  setShowModal,

  showModal,
}) {
  const closeModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <UIModal>
      <div>
        <img src={photo} />
      </div>
      <ModalInfo>
        <h4> {productName} </h4>
        <h3>{price}</h3>
        <p>{description}</p>
        <h5>Veja mais detalhes do produto </h5>
        <button onClick={closeModal}> Adicionar ao Carrinho</button>
        <h6>X</h6>
      </ModalInfo>
    </UIModal>
  );
}

export default CardModal;
