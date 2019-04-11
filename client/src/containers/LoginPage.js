import React from 'react';
import Sidebar from '../components/Sidebar';
import PreNavbar from '../components/PreNavbar';

class LoginPage extends React.Component {
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
                        <input id="logname" placeholder="Password"></input>
                    </div>
                    <div className="logSubmit">
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