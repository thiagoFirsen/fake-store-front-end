import "./styles.css";
const CardProduct = ({ img, title, price }) => {
  return (
    <div className="cardProduct">
      <div className="imageCointainer">
        <img src={img} alt="" />
      </div>

      {title && <h4>{title}</h4>}
      {price && <p>{price}</p>}
    </div>
  );
};

export default CardProduct;
