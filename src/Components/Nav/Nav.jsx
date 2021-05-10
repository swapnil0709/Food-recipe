import "./Nav.css";
import Button from "../Button/Button";
const Nav = ({ onClick, onChange, value, name }) => {
  return (
    <div className="headContent">
      <h1 className="title">Recipe Book</h1>
      <input
        name={name}
        value={value}
        className="searchBar"
        type="text"
        placeholder="search by recipe name"
        onChange={onChange}
      />
      <Button cls="addbutton" name=" Add Recipe" onClick={onClick} />
    </div>
  );
};

export default Nav;
