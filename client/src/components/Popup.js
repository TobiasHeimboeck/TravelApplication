import React from 'react';

class Popup extends React.Component {
    close() {
        document.getElementById("myPopup").style.display = "none";
    }

    render() {
        return (
            <div id="myPopup">
                <button className="w3-bar-item w3-button" onClick={this.close}>Close</button> 
                <a href="..." className="w3-bar-item w3-button">Login / Logout</a> 
                <a href="..." className="w3-bar-item w3-button">Create Account</a>
            </div>
        );
    }
}

export default Popup;