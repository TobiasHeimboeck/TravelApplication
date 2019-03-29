import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    render() {
        return (
            <div className="w3-sidebar w3-bar-block w3-collapse" id="mySidebar">
                <button id="head" className="w3-close w3-bar-item w3-button w3-hide-large" onClick={this.close}>Close</button> 
                <Link to="/" className="w3-bar-item w3-button">Home</Link>
                <Link to="/cities" className="w3-bar-item w3-button">Cities</Link>
            </div>
        );
    }
}

export default Sidebar;