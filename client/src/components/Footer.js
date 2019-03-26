import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p className="fooHeader">Want to build your own MYtinerary?</p> 
                <a href="..."> <i className="home fa fa-home"></i> </a>
                <a className="login" href="...">Log in</a>
                <a className="create" href="...">Register</a>
            </footer>
        );
    }
}

export default Footer;