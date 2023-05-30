import "./style.css";
const TextArea = ({ label }) => {
  return (
    <div className="textArea">
      <label htmlFor={label}>{label}</label>
      <textarea id={label}></textarea>
    </div>
  );
};

export default TextArea;
