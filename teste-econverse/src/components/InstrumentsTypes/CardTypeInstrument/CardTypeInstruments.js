import { FullCard } from "./styled";

function CardTypeInstruments({ image, type }) {
  return (
    <div>
      <FullCard src={image} />
      <h2>{type}</h2>
    </div>
  );
}

export default CardTypeInstruments;
