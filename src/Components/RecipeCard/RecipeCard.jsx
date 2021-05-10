import "./RecipeCard.css";
import Button from "../Button/Button";

const RecipeCard = ({ recipe, onClick, id }) => {
  return (
    <div className="recipeCard">
      <h2>{recipe.title}</h2>
      <Button name="View More" onClick={onClick} id={id} />
    </div>
  );
};

export default RecipeCard;
