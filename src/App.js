import React, { Component } from "react";

import "./App.css";
import { recipeLists } from "./Data/Data";

class App extends Component {
  state = {
    showModal: false,
    recipes: recipeLists,
    title: undefined,
    instruction: undefined,
    ingredients: undefined,
    search: "",
    mode: -1,
  };

  handleModal = () => {};

  handleCancel = () => {};

  handleOnChange = (e) => {};

  //add recipe
  handleAdd = () => {};

  //view recipe
  handleView = (i) => {};

  render() {
    return (
      <div>
        <h1>Recipe App</h1>
      </div>
    );
  }
}

export default App;
