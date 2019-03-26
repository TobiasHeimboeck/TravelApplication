import React from 'react';

class PreNavbar extends React.Component {
    open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    openPopup() {
        document.getElementById("myPopup").style.display = "block";
    }

    render() {
        return (
            <div className="prenavbar">
                <i onClick={this.openPopup} className="user fa fa-user"></i>
                <i onClick={this.open} className="more fa fa-align-justify"></i>
            </div>
        );
    }
}

export default PreNavbar;