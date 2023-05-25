import "./styles.css";
const Input = ({ type, placeholder, img, onChange, onClick }) => {
  return (
    <div className="containerInput">
      <input
        className="inputProducts"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button onClick={onClick}>
        <img src={img} alt="" />
      </button>
    </div>
  );
};

export default Input;
