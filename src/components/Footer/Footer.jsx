import "./styles.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/Footer/facebook.svg";
import instagram from "../../assets/Footer/instagram.svg";
import twitter from "../../assets/Footer/twitter.svg";
import CardFooter from "./CardFooter";

const Footer = () => {
  const informations = [
    {
      title: "Information",
      description: ["About", "Product", "Blog"],
    },
    {
      title: "Company",
      description: ["Community", "Career", "Out story"],
    },
    {
      title: "Contact",
      description: ["Getting Started", "Pricing", "Resources"],
    },
  ];

  return (
    <footer>
      <div className="footer">
        <div className="containerFooter">
          <div className="containerText">
            <h3>SHOPEFIRSEN</h3>
            <p>Nós podemos te ajudar a achar o que você deseja</p>
          </div>
          <div className="containerLinks">
            <Link to="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="" />
            </Link>
            <Link to="https://twitter.com/home" target="_blank">
              <img src={twitter} alt="" />
            </Link>
          </div>
        </div>
        <div className="containerInformations">
          {informations.map((information) => {
            return (
              <CardFooter
                key={information.title}
                title={information.title}
                description1={information.description[0]}
                description2={information.description[1]}
                description3={information.description[2]}
              />
            );
          })}
        </div>
      </div>
      <p className="textFooter">
        2023 all Right Reserved Term of use GREENMIND
      </p>
    </footer>
  );
};

export default Footer;
