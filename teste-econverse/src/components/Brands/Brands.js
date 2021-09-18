import { MainContainer, ContainerGeneral, BrandImgs } from "./styled";
import boss from "./../../assets/boss.png";
import akg from "./../../assets/akg.png";
import roland from "./../../assets/roland.png";
import shure from "./../../assets/shure.png";

function Brands() {
  return (
    <ContainerGeneral>
      <MainContainer>
        <div>
          <h1>
            AS <strong>MELHORES</strong> MARCAS
          </h1>
          <h3>
            it is a long established fact that a reader will be destracted by
            the readable
          </h3>
        </div>
        <BrandImgs>
          <img src={akg} />
          <img src={roland} />
          <img src={boss} />
          <img src={shure} />
        </BrandImgs>
      </MainContainer>
    </ContainerGeneral>
  );
}

export default Brands;
