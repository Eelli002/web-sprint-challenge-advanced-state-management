import React, { Component } from "react";
import "./App.css";
import SmurfCard from "./components/SmurfCard";
import SmurfForm from "./components/SmurfForm";
import SmurfList from "./components/SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
        <SmurfList/>
        <SmurfCard/>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.