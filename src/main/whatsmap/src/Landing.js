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

    componentDidMount() {
        const requestOptions = {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        // latitude/37.46855
        fetch("http://localhost:80/cctv/all", requestOptions)
        .then((response) => response.json())
        .then(
            (response) => {
            this.setState({
                cctvs: response,
            });
            },
            (error) => {
            this.setState({
                //error시 하고싶은거
            });
            }
        );
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
                    <Map cctvs={this.state.cctvs} filters={this.state.filters}/>
                </div>
            );
        }
    }
}



export default Landing;