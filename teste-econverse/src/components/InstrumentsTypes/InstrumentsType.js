import CardTypeInstruments from "./CardTypeInstrument/CardTypeInstruments";
import { CardContainer } from "./styled";
import guitar from "../../assets/guitar.png";
import guitar2 from "../../assets/guitar2.png";
import mic from "../../assets/mic.png";
import piano from "../../assets/piano.png";
import drum from "../../assets/drum.png";
import table from "../../assets/table.png";

function InstrumentsType() {
  return (
    <CardContainer>
      <CardTypeInstruments image={guitar} type={"GUITARRA"} />
      <CardTypeInstruments image={mic} type={"MICROFONE"} />
      <CardTypeInstruments image={table} type={"MESA DE SOM"} />
      <CardTypeInstruments image={piano} type={"TECLADOS"} />
      <CardTypeInstruments image={guitar2} type={"VIOLÃO"} />
      <CardTypeInstruments image={drum} type={"BATERIAS"} />
    </CardContainer>
  );
}

export default InstrumentsType;
