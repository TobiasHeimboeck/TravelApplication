import React from 'react';
import Sidebar from '../components/Sidebar.js';
import PreNavbar from '../components/PreNavbar.js';
import City from '../components/City.js';
import { connect } from "react-redux";
import * as actionCreator from '../store/actions/actions.js';

class CitiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredCities: [],
        };
    }

    componentDidMount() {
        this.props.getCities();
    }

    handleFilterInput = (cityFilter) => {
        let filteredCities = this.props.cities;
        
        filteredCities = filteredCities.filter((city) => {
            let cityName = city.name.toLowerCase();
            return cityName.indexOf(cityFilter.target.value.toLowerCase()) !== -1;
        })

        this.setState({filteredCities});
    }

    render() {
        if (this.props.citiesIsLoading) {
            return <div>Loading...</div>;
        } else {
            if (this.state.filteredCities.length > 0) {
                return (
                    <div>
                        <Sidebar />
                        <PreNavbar />
                        <div>
                            <h1 id="header" className="cityTitle">Cities</h1>
                            <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>
                            {
                                this.state.filteredCities.map((item, index) => (
                                    <City name={item.name} image={item.image} key={index} />
                                ))
                            }
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
                            <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>
                            {
                                this.props.cities.map((item, index) => (
                                    <City name={item.name} image={item.image} key={index} />
                                ))
                            }
                        </div>
                    </div>
                ); 
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {cities: state.cities, city: state.city, citiesIsLoading: state.citiesIsLoading}
}
  
function mapDispatchToProps(dispatch) {
    return {
        getCities: () => dispatch(actionCreator.fetchCitiesData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CitiesPage);