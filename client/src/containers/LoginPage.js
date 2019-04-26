import React from 'react';
import Sidebar from '../components/Sidebar';
import PreNavbar from '../components/PreNavbar';

class LoginPage extends React.Component {
    login() {
        var username = document.getElementById("logname");
        var password = document.getElementById("pword");

        if (username.value === "") {
            username.placeholder = "Username is required";
            username.style.color = "red";
        }

        if (password.value === "") {
            password.placeholder = "Password is required";
            password.style.color = "red";
        }
    }

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <i className="fas fa-rocket"></i>
                <h1 className="myHeadline">My Itinerary</h1>         
                <div className="cont">
                    <div className="log">
                        <input id="logname" placeholder="Username"></input>
                    </div>
                    <div className="log">
                        <input id="pword" type="password" placeholder="Password"></input>
                    </div>

                    <div onClick={this.login} className="logSubmit">
                        <p>Login now</p>
                    </div>
                    <p className="text">
                        Don’t have a MyItinerary account yet? <br />
                        You should create one! It’s totally free and <br />
                        only takes a minute.
                    </p>
                    <a className="create" href="...">Create Account</a>
                </div>
            </div>
        );
    }
}

export default LoginPage;