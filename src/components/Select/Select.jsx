import "./styles.css";
const Select = ({ id, name, select, children, onChange }) => {
  return (
    <div className="containerSelect">
      <select id={id} name={name} onChange={onChange}>
        <option>{select}</option>
        {children}
      </select>
      <div className="arrow"></div>
    </div>
  );
};

export default Select;
