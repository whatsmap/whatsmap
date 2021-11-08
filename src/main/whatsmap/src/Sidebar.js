import React, {Component} from "react";

import './css/Sidebar.css';

class Sidebar extends Component{

search = () => {
    console.log("===")
}

    render(){
        return(
            <div className="side-bar">
                <div>
                    <input className="side-bar-search"></input>
                    <button className="side-bar-search"
                        onClick={function(){this.search()}.bind(this)}
                        >검색</button>
                </div>
            </div>
        )
    }
}



export default Sidebar;