import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    render() {
        return (
            <div className="w3-sidebar w3-bar-block w3-collapse" id="mySidebar">
                <div className="sidebarHeader">
                    <button id="head" className="w3-close w3-bar-item w3-button w3-hide-large" onClick={this.close}><i className="fas fa-times"></i></button>
                </div>

                <Link to="/" className="sidebarText w3-bar-item w3-button"> <i className="fa fa-home"></i> Home </Link>
                <Link to="/cities" className="sidebarText w3-bar-item w3-button"> <i className="fas fa-city"></i> Cities </Link>
                <hr></hr>

                <Link to="#" className="sidebarText w3-bar-item w3-button"> <i className="fa fa-sign-in-alt"></i> Login / Logout </Link>
                <Link to="#" className="sidebarText w3-bar-item w3-button"> <i className="fa fa-user"></i> Create Account </Link>

                <div className="sidebarFooter">
                    <hr></hr>
                    <h1 className="copyright">&copy; Tobias Heimböck </h1>
                </div>
            </div>
        );
    }
}

export default Sidebar;
