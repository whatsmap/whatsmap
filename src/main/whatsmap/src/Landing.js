import React, {Component} from "react";

import './css/Landing.css';
import Map from './Map.js';
import Sidebar from './Sidebar.js';

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            start_map: true,
            filters: [],
            cctvs: []
        }
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
                    <button onClick={function(){this.onStartMap()}.bind(this)}>
                    버튼</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Sidebar setFilters={this.setFilters} />
                    <Map cctvs={this.state.cctvs} filters={this.state.filters}/>

                </div>
            );
        }
    }
}



export default Landing;