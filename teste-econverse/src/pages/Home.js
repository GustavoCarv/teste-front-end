import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import MainImage from "../components/MainImage/MainImage";
import InstrumentsType from "../components/InstrumentsTypes/InstrumentsType";
import SecondaryImage from "../components/SecondaryImage/MainImage";
import Products from "../components/Products/Products";
import Brands from "../components/Brands/Brands";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import { General } from "./styled";

function Home() {
  return (
    <General>
      <Header />
      <SearchBar />
      <Dropdown />
      <MainImage />
      <InstrumentsType />
      <SecondaryImage />
      <Products />
      <Brands />
      <AboutUs />
      <Contact />
    </General>
  );
}

export default Home;
