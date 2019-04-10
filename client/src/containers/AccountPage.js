import React from 'react';
import Sidebar from '../components/Sidebar';
import PreNavbar from '../components/PreNavbar';

class AccountPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username:  '',
            password:  '',
            email:     '',
            firstname: '',
            lastname:  '',
            agreed:    false,
        }
    }

    create() {
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        var email = document.getElementById("email");
        var firstname = document.getElementById("firstname");
        var lastname = document.getElementById("lastname");

        if (username.value === "" && password.value === "" && email.value === "" && firstname.value === "" && lastname.value === "") {
            username.style.backgroundColor = "red";
            password.style.backgroundColor = "red";
            email.style.backgroundColor = "red";
            firstname.style.backgroundColor = "red";
            lastname.style.backgroundColor = "red";
            setTimeout(function() {
                username.style.backgroundColor = "#C4C4C4";
                password.style.backgroundColor = "#C4C4C4";
                email.style.backgroundColor = "#C4C4C4";
                firstname.style.backgroundColor = "#C4C4C4";
                lastname.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else if (username.value === "") {
            username.style.backgroundColor = "red";
            setTimeout(function() {
                username.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else if (password.value === "") {
            password.style.backgroundColor = "red";
            setTimeout(function() {
                password.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else if (email.value === "") {
            email.style.backgroundColor = "red";
            setTimeout(function() {
                email.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else if (firstname.value === "") {
            firstname.style.backgroundColor = "red";
            setTimeout(function() {
                firstname.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else if (lastname.value === "") {
            lastname.style.backgroundColor = "red";
            setTimeout(function() {
                lastname.style.backgroundColor = "#C4C4C4";
            }, 1000);
        } else {
            console.log(username.value, password.value, email.value, firstname.value, lastname.value);
            console.log(this.state);
        }
    }

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <h1 className="accountHeader">Create Account</h1>
                <div className="uploadImage">
                    <i className="far fa-user"></i>
                    <p className="add">+ Add photo</p>
                </div>
                <div className="boxes">

                    <div className="logBox">
                        <span>Username</span>
                        <input id="username" placeholder="Your username"></input>
                    </div>

                    <div className="logBox">
                        <span>Password</span>
                        <input id="password" placeholder="Your password"></input>
                    </div>

                    <div className="logBox">
                        <span>Email</span>
                        <input id="email" placeholder="Your email"></input>
                    </div>

                    <div className="logBox">
                        <span>First Name</span>
                        <input id="firstname" placeholder="Your firstname"></input>
                    </div>

                    <div className="logBox">
                        <span>Last Name</span>
                        <input id="lastname" placeholder="Your lastname"></input>
                    </div>

                    <input className="check" type="checkbox" /> I agree with Mytinerary’s
                    <a className="terms" href="...">Terms & Conditions</a>
                    <button onClick={this.create} className="submit">
                        <p>Create</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default AccountPage;