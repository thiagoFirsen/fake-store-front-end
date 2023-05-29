import { Link } from "react-router-dom";
import "./styles.css";
import Cart from "../../assets/Header/Cart.svg";
import FilterRight from "../../assets/Header/FilterRight.svg";
import Line1 from "../../assets/Header/Line 1.svg";
import Person from "../../assets/Header/Person.svg";

const Header = () => {
  return (
    <header>
      <h1>GREENMIND</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </nav>
      <div className="cointainerButtonImg">
        <button className="customButton">
          <img src={Cart} alt="Carrinho" />
        </button>
        <button className="customButton">
          <img src={Person} alt="Pessoa" />
        </button>
        <button className="customButton">
          <img src={Line1} alt="Linha" />
        </button>
        <button className="customButton">
          <img src={FilterRight} alt="Filtro" />
        </button>
      </div>
    </header>
  );
};

export default Header;
