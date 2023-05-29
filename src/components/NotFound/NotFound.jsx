import "./style.css";
import imgNotFound from "../../assets/404/404.jpg";
const NotFound = () => {
  return (
    <div className="notFound main">
      <img src={imgNotFound} alt="" />
    </div>
  );
};

export default NotFound;
