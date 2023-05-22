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
      <div className="containerFooter">
        <div className="containerText">
          <h3>GREENMIND</h3>
          <p>We help you find your dream plant</p>
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
        <div className="textFooter">
          2023 all Right Reserved Term of use GREENMIND
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
    </footer>
  );
};

export default Footer;
