import React, {Component} from "react";

import './Sidebar.css';

class Sidebar extends Component{
    state = {
        datas: ["공공화장실", "방범용cctv", "경찰서위치", "와이파이", "불법 주정차", "어린이 보호구역"],
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