import "./style.css";
import imgNotFound from "../../assets/404/404.png";
const NotFound = () => {
  return (
    <div className="notFound main">
      <h1>PAGINA NÃO ENCONTRADA</h1>
      <img src={imgNotFound} alt="" />
    </div>
  );
};

export default NotFound;
