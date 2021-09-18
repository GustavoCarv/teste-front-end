import { ContainterBar, InputSearch, Cart } from "./styled";

function SearchBar() {
  return (
    <div>
      <ContainterBar>
        <h1>Ninja Som</h1>
        <InputSearch placeholder="Busque Aqui..." />
        <div>icone (11) 9999-9999</div>
        <div>
          <p> Olá, visitante</p>
          <p> Minha Conta</p>
        </div>
      </ContainterBar>
      <Cart>
        <h2>SEU CARRINHO </h2>
        <h1>0 Items</h1>
      </Cart>
    </div>
  );
}

export default SearchBar;
