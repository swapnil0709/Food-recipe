import "./Button.css";
const Button = ({ cls, name, onClick, id }) => (
  <button className={cls} onClick={onClick} id={id}>
    {name}
  </button>
);

export default Button;
