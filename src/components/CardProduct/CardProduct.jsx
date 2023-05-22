import "./styles.css";
const CardProduct = ({ img, title, price }) => {
  return (
    <div className="cardProduct">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{"₱" + price}</p>
    </div>
  );
};

export default CardProduct;
