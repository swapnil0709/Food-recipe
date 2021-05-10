import "./RecipeContainer.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { v4 as uuidv4 } from "uuid";

const RecipeContainer = ({ recipes, onClick }) => {
  return recipes.map((recipe, index) => (
    <RecipeCard recipe={recipe} key={uuidv4()} onClick={onClick} id={index} />
  ));
};

export default RecipeContainer;
