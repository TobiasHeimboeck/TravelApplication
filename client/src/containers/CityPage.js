import React from 'react';
import { connect } from "react-redux";
import * as creator from '../store/actions/itineraryActions';

class CityPage extends React.Component {

    componentDidMount() {
        this.props.getCity(window.location.pathname.replace("/", ""));
    }

    render() {
        return (
            <div>
                <p className="cityName">  </p>
                <div className="content">
                    <p className="cityHeadline">Available MYtineries</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {city: state.message, cityIsLoading: state.success};
}

const mapDispatchToProps = dispatch => {
    return {
        getCity: name => dispatch(creator.fetchCityData(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CityPage);