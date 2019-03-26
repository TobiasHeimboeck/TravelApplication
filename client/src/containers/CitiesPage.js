import React from 'react';
import Sidebar from '../components/Sidebar.js';
import PreNavbar from '../components/PreNavbar.js';

class CitiesPage extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <div>
                    <h1 className="cityTitle">Cities</h1>
                </div>
            </div>
        );
    }
}

export default CitiesPage;