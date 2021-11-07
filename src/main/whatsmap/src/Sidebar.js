import React, {Component} from "react";

import './css/Sidebar.css';

class Sidebar extends Component{
    state = {
        datas: ["방범용cctv","와이파이", "주차장"],
    }

    filter = (data) => {
        this.props.setFilters(data);
    }

    render(){
        const filters_name = this.state.datas.map((d) => 
            <div className="side-bar-buttons" key={d} 
                 onClick={function(){this.filter(d)}.bind(this)}>
            <p>{d}</p></div>
        );

        return(
            <div className="side-bar">
                {filters_name}
                <div>
                    <input className="side-bar-search"></input>
                    <button className="side-bar-search">검색</button>
                </div>
            </div>
        )
    }
}



export default Sidebar;