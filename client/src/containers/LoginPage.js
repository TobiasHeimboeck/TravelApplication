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

        if (username.value !== "" && password.value !== "") {
            fetch("/cities/api/user/login", {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: 'username=' + username.value + '&password=' + password.value
            }).then(response => {
                return response.json();
            }).then(json => {
                if (json.success) {
                    username.style.color = "#605757";
                    password.style.color = "#605757";
                } else {
                    switch (json.state) {
                        case 'username':
                            username.value = "";
                            username.placeholder = "This username doesn't exist";
                            username.style.color = "red";
                            break;
                        case 'password':
                            password.value = "";
                            password.placeholder = "Password is wrong";
                            password.style.color = "red";
                            break;
                        case 'alreadyLoggedIn':
                            username.value = "";
                            password.value = "";
                            username.placeholder = "You already logged in";
                            username.style.color = "red";
                            password.placeholder = "You already logged in";
                            password.style.color = "red";
                            break;
                    }
                }
            }).catch(e => {
                console.log(e);
            });
        }
    }

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <i className="fas fa-rocket"></i>
                <h1 className="myHeadline">My Itinerary</h1>
                <div className="google">
                    <i className="fab fa-google"></i>
                    <p>Sign in</p>
                </div>
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
                        Don’t have a MyItinerary account yet? <br></br>
                        You should create one! It’s totally free and <br></br>
                        only takes a minute.
                    </p>
                    <a className="create" href="...">Create Account</a>
                </div>
            </div>
        );
    }
}

export default LoginPage;