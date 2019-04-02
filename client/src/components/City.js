import React from 'react';
import { Link } from 'react-router-dom';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name, 
            image: props.image,
            call: props.call,
        };
    }

    render() {
        return (
            <div className="city">
                <Link to={"/itineraries/city/" + this.props.call}>
                    <div className="cityImageHeader"> <p> {this.props.name} </p> </div>
                    <img src={this.props.image} alt={"City"}></img>
                </Link>
            </div>
        );
    }
}

export default City;