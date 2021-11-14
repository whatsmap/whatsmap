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
                <div className="col-md-6">
                    <a href="/posts/save" role="button" class="btn btn-primary">글 등록</a>
                    {/* {{#userName}}
                        Logged in as: <span id="user">{{userName}}</span> */}
                        <a href="/logout" class="btn btn-info active" role="button">Logout</a>
                    {/* {{/userName}}
                    {{^userName}} */}
                        <a href="/oauth2/authorization/google" class="btn btn-success active" role="button">Google Login</a>
                        <a href="/oauth2/authorization/naver" class="btn btn-secondary active" role="button">Naver Login</a>
                    {/* {{/userName}} */}
                </div>
            </div>
        )
    }
}



export default Sidebar;