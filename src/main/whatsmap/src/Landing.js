import React, {Component} from "react";

import './Landing.css';
import Map from './Map.js'

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {start_map: true};
        this.onStartMap = this.onStartMap.bind(this);
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
                    <Map></Map>
                </div>
            );
        }
    }
}




export default Landing;