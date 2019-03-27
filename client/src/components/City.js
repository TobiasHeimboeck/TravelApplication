import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name, 
            image: props.image
        };
    }

    render() {
        return (
            <div className="city">
                <div className="cityImageHeader"> <p> {this.props.name} </p> </div>
                <img src={this.props.image} alt={"City"}></img>
            </div>
        );
    }
}

export default City;