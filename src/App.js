import React, { Component } from "react";
import Display from "./components/Display";
import Hero from "./components/Hero";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Display />
      </div>
    );
  }
}
