import React from 'react';
import { connect } from "react-redux";
import * as creator from '../store/actions/itineraryActions';
import PreNavbar from '../components/PreNavbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

class CityPage extends React.Component {

    componentDidMount() {
        this.props.getCity(window.location.pathname.replace("/", ""));
    }

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <div className="toolbar">
                    <Link to="/cities">
                        <i className="fa fa-arrow-left"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {city: state, cityIsLoading: state.cityIsLoading};
}

const mapDispatchToProps = dispatch => {
    return {
        getCity: name => dispatch(creator.fetchCityData(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CityPage);