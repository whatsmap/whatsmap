import './App.css';
import React, { Component } from "react";

import Landing from './Landing.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      start_map:true,
      show:true
    };
  }

  render(){
      return(
      <div className="App">
        <Landing></Landing>
      </div>
      );
  }
}




export default App;
