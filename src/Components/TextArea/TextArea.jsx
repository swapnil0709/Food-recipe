import "./TextArea.css";
const TextArea = ({ name, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={name}>
        <h3>{name.toUpperCase()} *</h3>
      </label>
      <textarea
        required
        name={name}
        id=""
        cols="30"
        rows="10"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
