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
  };

  return (
    <UIModal>
      <div>
        <img src={photo} />
      </div>
      <ModalInfo>
        <h4> {productName} </h4>
        <h3>
          {" "}
          {(price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
        <p>{description}</p>
        <h5>Veja mais detalhes do produto </h5>
        <button> Adicionar ao Carrinho</button>
        <h6 onClick={closeModal}>X</h6>
      </ModalInfo>
    </UIModal>
  );
}

export default CardModal;
