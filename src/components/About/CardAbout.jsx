import "./styles.css";
const CardAbout = ({ img, title, description }) => {
  return (
    <div className="cointainerCardAbout">
      <div className="cointainerCardAboutImage">
        <img src={img} alt="" />
        <h3>{title}</h3>
      </div>

      <h4>{description}</h4>
    </div>
  );
};

export default CardAbout;
