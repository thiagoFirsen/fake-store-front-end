import "./styles.css";
import setaPrabaixo from "../../assets/Product/setaPrabaixo.svg";
const Select = ({ id, label, name, select, children, onChange }) => {
  return (
    <div className="containerSelect">
      <select id={id} name={name} onChange={onChange}>
        <option>{select}</option>
        {children}
      </select>
      <button>
        <img src={setaPrabaixo} alt="" />
      </button>
    </div>
  );
};

export default Select;
