import React from 'react';
import Sidebar from '../components/Sidebar.js';
import City from '../components/City.js';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as cityActionCreator from '../store/actions/cityActions.js';

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

    open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    render() {
        if (this.props.citiesIsLoading) {
            return <div>Loading...</div>;
        } else {
            if (this.state.filteredCities.length > 0) {
                return (
                    <div>
                        <Sidebar />
                        <div id="page">
                            <div className="searchbar">
                                <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>                                                  
                                <i onClick={this.open} className="fa fa-align-justify openSidebar"></i>
                                <ul className="selectors">
                                    <Link to="/"> <li> <i className="fa fa-home"></i> HOME </li> </Link>
                                    <Link to="/cities"> <li> <i className="fas fa-city toCity"></i> CITIES</li> </Link>
                                </ul>
                            </div>
                            {this.state.filteredCities.map((item, index) => (
                                <City name={item.name} image={item.image} call={item.call} key={index} />
                            ))}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Sidebar />
                        <div id="page">
                            <div className="searchbar">
                                <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>
                                <i onClick={this.open} className="fa fa-align-justify openSidebar"></i>
                                <ul className="selectors">
                                    <Link to="/"> <li> <i className="fa toHome fa-home"></i> HOME</li> </Link>
                                    <Link to="/cities"> <li> <i className="fa fa-city toCity"></i> CITIES</li> </Link>
                                </ul>
                            </div>
                            {this.props.cities.map((item, index) => (
                                <City name={item.name} image={item.image} call={item.call} key={index} />
                            ))}
                        </div>
                    </div>
                ); 
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities, 
        citiesIsLoading: state.citiesIsLoading,
        city: state.city, 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCities: () => dispatch(cityActionCreator.fetchCitiesData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CitiesPage);