import { NavLink } from "react-router-dom";
import "./styles.css";
import Cart from "../../assets/Header/Cart.svg";
import FilterRight from "../../assets/Header/FilterRight.svg";
import Line1 from "../../assets/Header/Line 1.svg";
import Person from "../../assets/Header/Person.svg";
import Logo from "../../assets/Header/logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <img src={Logo} alt="" />
        </h1>
        <div className="linksNav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "noActive")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "noActive")}
          >
            Produtos
          </NavLink>

          <NavLink
            to="/productRegister"
            className={({ isActive }) => (isActive ? "active" : "noActive")}
          >
            Cadastro de Produto
          </NavLink>
        </div>
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
