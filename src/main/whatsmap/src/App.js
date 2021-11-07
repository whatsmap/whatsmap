import './css/App.css';
import React, { Component } from 'react';
import Landing from './Landing.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cctvs: []
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };

    fetch("http://localhost:80/", requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            cctvs: response.data
          })
        },
        (error) => {
          this.setState({
            //error시 하고싶은거
          })
        }
      );
  }

  render(){          
      return(
      <div className="App">

        <Landing cctvs={this.state.cctvs}></Landing>
      </div>
      );
  }
}



export default App;






