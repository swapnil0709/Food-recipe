import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { recipeLists } from "./Data/Data";
import Modal from "./Components/Modal/Modal";
import RecipeContainer from "./Components/RecipeContainer/RecipeContainer";
import Input from "./Components/Input/Input";
import TextArea from "./Components/TextArea/TextArea";
import Button from "./Components/Button/Button";
class App extends Component {
  state = {
    showModal: false,
    recipes: recipeLists,
    title: "",
    instruction: "",
    ingredients: "",
    search: "",
    mode: -1,
    viewModal: false,
    clickedIndex: "",
  };

  handleModal = () => {};

  handleSearch = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      const { search } = this.state;
      if (search) {
        const filteredSearch = recipeLists.filter((recipe) =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        );
        this.setState({ recipes: filteredSearch });
      } else {
        this.setState({ recipes: recipeLists });
      }
    });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleClearInput = () => {
    this.setState({
      title: "",
      instruction: "",
      ingredients: "",
    });
  };

  //add recipe
  handleAdd = (e) => {
    e.preventDefault();
    const { title, instruction, ingredients, recipes } = this.state;
    if (title && instruction && ingredients) {
      this.setState({
        recipes: [
          ...recipes,
          {
            title: title,
            ingredients: ingredients.split(","),
            instruction: instruction,
          },
        ],
      });
      this.handleClearInput();
      this.handleClosePopUp();
    } else {
      alert("All Fields are Mandatory");
    }
  };

  //view recipe
  handleView = ({ target }) => {
    this.setState({ viewModal: true, clickedIndex: target.id });
  };
  handleClosePopUp = () => {
    this.setState({
      showModal: false,
      viewModal: false,
    });
  };
  handleOpenPopUp = () => {
    this.setState({
      showModal: true,
    });
  };
  render() {
    const {
      title,
      instruction,
      ingredients,
      recipes,
      showModal,
      viewModal,
      clickedIndex,
      search,
    } = this.state;
    return (
      <div>
        <Nav
          onClick={this.handleOpenPopUp}
          onChange={this.handleSearch}
          name="search"
          value={search}
        />
        <RecipeContainer recipes={recipes} onClick={this.handleView} />
        {showModal && (
          <Modal>
            <div
              className="modalBg"
              onClick={() => {
                this.handleClearInput();
                this.handleClosePopUp();
              }}
            ></div>
            <form action="" className="pop">
              <span
                onClick={() => {
                  this.handleClearInput();
                  this.handleClosePopUp();
                }}
              >
                X
              </span>
              <h2>Add Your Recipe</h2>
              <Input
                name="title"
                value={title}
                onChange={this.handleOnChange}
              />
              <Input
                name="ingredients"
                placeholder="Please separate the ingredients with commas"
                value={ingredients}
                onChange={this.handleOnChange}
              />

              <TextArea
                name="instruction"
                value={instruction}
                onChange={this.handleOnChange}
              />
              <Button cls="add" name="Add" onClick={this.handleAdd} />
              <Button
                cls="add"
                name="Cancel"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleClearInput();
                  this.handleClosePopUp();
                }}
              />
              <p> Note: * All Fields are mandatory.</p>
            </form>
          </Modal>
        )}
        {viewModal && (
          <Modal>
            <div
              className="modalBg"
              onClick={() => {
                this.handleClosePopUp();
              }}
            ></div>
            <div className="pop">
              <h1>{recipes[clickedIndex].title}</h1>
              <span
                onClick={() => {
                  this.handleClosePopUp();
                }}
              >
                X
              </span>
              <h3>Ingredients</h3>
              <ul>
                {recipes[clickedIndex].ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>

              <h3>Instructions</h3>
              <p>{recipes[clickedIndex].instruction}</p>
              <Button name="close" cls="add" onClick={this.handleClosePopUp} />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
