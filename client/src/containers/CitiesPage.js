import React from 'react';
import Sidebar from '../components/Sidebar.js';
import PreNavbar from '../components/PreNavbar.js';
import City from '../components/City.js';

class CitiesPage extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            isFetching: false
        };
    }

    fetchData() {
        fetch("/cities/all")
            .then(response => response.json())
            .then(result => this.setState({
                cities: result, 
                isFetching: false
            }))
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.state.cities.length > 0) {
            return (
                <div>
                    <Sidebar />
                    <PreNavbar />
                    <div>
                        <h1 id="header" className="cityTitle">Cities</h1>
                        {this.state.cities.map((item, index) => (
                            <City name={item.name} image={item.image} key={index} />
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Sidebar />
                    <PreNavbar />
                    <div>
                        <h1 id="header" className="cityTitle">Cities</h1>
                    </div>
                </div>
            );
        }
    }
}

export default CitiesPage;