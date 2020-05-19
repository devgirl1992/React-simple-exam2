import React, { Component } from "react";
import Validation from "./Components/validation";
import Char from "./Components/char";
import "./App.css";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (event) => {
    let userInputS = { ...this.state.userInput };
    userInputS = event.target.value;

    this.setState({ userInput: userInputS });
    // console.log(userInputS);
  };

  deleteCharHandler = (index) => {

  }

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)} />
    })

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userinpute}
        />
        <p> {this.state.userInput} </p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
