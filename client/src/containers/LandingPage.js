import React from 'react';
import Navbar from '../components/Navbar.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;