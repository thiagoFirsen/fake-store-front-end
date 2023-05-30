import "./styles.css";

const Button = ({ onclick, text, background }) => {
  return (
    <button
      className="buttonDefault"
      style={{ backgroundColor: background }}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
