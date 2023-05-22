import "./styles.css";
const Input = ({ type, placeholder, img }) => {
  return (
    <div className="containerInput">
      <input className="inputProducts" type={type} placeholder={placeholder} />
      <button>
        <img src={img} alt="" />
      </button>
    </div>
  );
};

export default Input;
