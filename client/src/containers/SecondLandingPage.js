import React from 'react';
import PreNavbar from '../components/PreNavbar.js';
import Carousel from '../components/Carousel.js';
import Sidebar from '../components/Sidebar.js';

class SecondLandingPage extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <Carousel />
            </div>
        );
    }
}

export default SecondLandingPage;