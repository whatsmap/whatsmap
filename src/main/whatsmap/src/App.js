import './css/App.css';
import React, { Component } from 'react';
import Landing from './Landing.js'

class App extends Component{
  render(){
      return(
      <div className="App">

        {/* <Landing cctvs={this.props.cctvs}></Landing> */}
        <Landing></Landing>
      </div>
      );
  }
}



export default App;






