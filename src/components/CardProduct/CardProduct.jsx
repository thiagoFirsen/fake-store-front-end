import "./styles.css";
const CardProduct = ({ img, title, price }) => {
  return (
    <div className="cardProduct">
      <img src={img} alt="" />
      {title && <h4>{title}</h4>}
      {price && <p>{price}</p>}
    </div>
  );
};

export default CardProduct;
