import React from 'react';
import Sidebar from '../components/Sidebar';
import PreNavbar from '../components/PreNavbar';

class AccountPage extends React.Component {
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
                        <input placeholder="Your username"></input>
                    </div>

                    <div className="logBox">
                        <span>Password</span>
                        <input placeholder="Your password"></input>
                    </div>

                    <div className="logBox">
                        <span>Email</span>
                        <input placeholder="Your email"></input>
                    </div>

                    <div className="logBox">
                        <span>First Name</span>
                        <input placeholder="Your firstname"></input>
                    </div>

                    <div className="logBox">
                        <span>Last Name</span>
                        <input placeholder="Your lastname"></input>
                    </div>

                    <input className="check" type="checkbox" /> I agree with Mytinerary’s
                    <a className="terms" href="...">Terms & Conditions</a>
                    <div className="submit">
                        <p>Create</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountPage;