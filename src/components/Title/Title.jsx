import "./styles.css";
const Title = ({ title, description }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Title;
