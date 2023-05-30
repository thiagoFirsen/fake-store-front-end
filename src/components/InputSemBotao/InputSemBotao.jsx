import "./style.css";

const InputSemBotao = ({ label }) => {
  return (
    <div className="inputSemBotao">
      <label htmlFor={label}>{label}</label>
      <input id={label}></input>
    </div>
  );
};

export default InputSemBotao;
