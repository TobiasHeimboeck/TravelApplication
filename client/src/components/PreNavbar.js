import React from 'react';
import { Link } from 'react-router-dom';

class PreNavbar extends React.Component {
    open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    openPopup() {
        document.getElementById("myPopup").style.display = "block";
    }

    render() {
        return (
            <div className="topbar">
                <ul className="selectors2">
                    <Link to="/"> <li> <i className="fa fa-home"></i> HOME </li> </Link>
                    <Link to="/cities"> <li> <i className="fas fa-city toCity2"></i> CITIES</li> </Link>
                </ul>
            </div>
        );
    }
}

export default PreNavbar;