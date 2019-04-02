import React from 'react';
import City from '../components/City.js';
import { connect } from "react-redux";
import * as actionCreator from '../store/actions/cityActions.js';
import { Link } from 'react-router-dom';

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
                        <div className="searchbar">
                            <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>
                            <ul className="selectors">
                                <Link to="/"> <li style={{float: "left"}}> <i className="fa fa-home"></i> HOME</li> </Link>
                                <Link to="/cities"> <li style={{float: "right"}}> <i className="fas fa-city"></i> CITIES</li> </Link>
                            </ul>
                        </div>
                        {this.state.filteredCities.map((item, index) => (
                            <City name={item.name} image={item.image} call={item.call} key={index} />
                        ))}
                    </div>
                ); 
            } else {
                return (
                    <div>
                        <div className="searchbar">
                            <input value={this.state.cityFilter} onChange={this.handleFilterInput} className="cityFilter" type="text" placeholder="Search a city" name="Search city"></input>
                            <ul className="selectors">
                                <Link to="/"> <li style={{float: "left"}}> <i className="fa fa-home"></i> HOME</li> </Link>
                                <Link to="/cities"> <li style={{float: "right"}}> <i className="fas fa-city"></i> CITIES</li> </Link>
                            </ul>
                        </div>
                        {this.props.cities.map((item, index) => (
                            <City name={item.name} image={item.image} call={item.call} key={index} />
                        ))}
                    </div>
                ); 
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {cities: state.cities, city: state.city, citiesIsLoading: state.citiesIsLoading};
}

function mapDispatchToProps(dispatch) {
    return {
        getCities: () => dispatch(actionCreator.fetchCitiesData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CitiesPage);