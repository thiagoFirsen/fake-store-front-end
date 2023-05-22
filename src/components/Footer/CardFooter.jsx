import "./styles.css";
import { Link } from "react-router-dom";
const CardFooter = ({ title, description1, description2, description3 }) => {
  return (
    <div className="cardFooter">
      <h3>{title}</h3>
      <Link to="/">{description1}</Link>
      <Link to="/">{description2}</Link>
      <Link to="/">{description3}</Link>
    </div>
  );
};

export default CardFooter;
