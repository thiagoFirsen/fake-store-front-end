import "./styles.css";
const CardAbout = ({ img, title, description }) => {
  return (
    <div className="cointainerCardAbout">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default CardAbout;
