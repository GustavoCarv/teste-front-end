import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import styled from "styled-components";
import Dropdown from "./components/Dropdown/Dropdown";
import MainImage from "./components/MainImage/MainImage";
import InstrumentsType from "./components/InstrumentsTypes/InstrumentsType";
import SecondaryImage from "./components/SecondaryImage/MainImage";
import Products from "./components/Products/Products";

const Geral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 3400px;
  position: relative;
`;

function App() {
  return (
    <Geral>
      <Header />
      <SearchBar />
      <Dropdown />
      <MainImage />
      <InstrumentsType />
      <SecondaryImage />
      <Products />
    </Geral>
  );
}

export default App;
