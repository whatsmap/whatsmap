import React, {Component} from "react";

import './Sidebar.css';

class Sidebar extends Component{
    render(){
        var filters = [];
        var datas = ["공공화장실", "방범용cctv", "경찰서위치", "와이파이", "불법 주정차", "어린이 보호구역"]
        var i = 0;
        while(i < datas.length){
            filters.push(<div className="side-bar-buttons" key={i}><p>{datas[i]}</p></div>);
            i += 1;
        }

        return(
            <div className="side-bar">
                {filters}
                <div>
                    <input className="side-bar-search"></input>
                    <button className="side-bar-search">검색</button>
                </div>
            </div>
        )
    }
}



export default Sidebar;