import React, {Component} from "react";

import './css/Landing.css';
import Map from './Map.js';
import Sidebar from './Sidebar.js';

class Landing extends Component{
    state = {
        start_map: true,
        filters: []
    } 

    onStartMap() {
        this.setState(state => ({
            start_map: !state.start_map
        }));
    }

    setFilters = (data) => {
        console.log(data);
        if(this.state.filters.includes(data)){
            this.state.filters.pop(data);
        }
        else{
            this.state.filters.push(data);
        }
        console.log(this.state.filters);
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
                    <Map filters={this.state.filters}/>
                </div>
            );
        }
    }
}



export default Landing;