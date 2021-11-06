import React, {Component} from "react";

import './Landing.css';
import Map from './Map.js'
import Sidebar from './Sidebar.js'

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            start_map: true,
            window_data: "Hello World!"
        };
    }

    onStartMap() {
        this.setState(state => ({
            start_map: !state.start_map
        }));
    }

    render(){
        if(this.state.start_map){
            return(
                <div className="Landing">
                    <h3>랜딩페이지</h3>
                    <button onClick={function(){
                        this.onStartMap()
                    }.bind(this)}>버튼</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <div id="info-window">{this.state.window_data}</div>
                    <Sidebar />
                    <Map />
                </div>
            );
        }
    }
}




export default Landing;