import "./Input.css";
const Input = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={name}>
        <h3>{name.toUpperCase()} *</h3>
      </label>
      <input
        required
        type="text"
        className="inputFields"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
