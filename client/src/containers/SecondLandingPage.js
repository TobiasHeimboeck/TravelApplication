import React from 'react';
import PreNavbar from '../components/PreNavbar.js';
import Navbar from '../components/Navbar.js';
import Content from '../components/Content.js';
import Carousel from '../components/Carousel.js';
import Sidebar from '../components/Sidebar.js';
import Popup from '../components/Popup.js';

class SecondLandingPage extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <Popup />
                <Navbar />
                <Content />
                <Carousel />
            </div>
        );
    }
}

export default SecondLandingPage;