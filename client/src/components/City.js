import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name, src: props.src };
        this.randomNumber = Math.round(Math.random() * this.props.name.length);
    }

    render() {
        return (
            <div className="city">
                <img src={this.props.src} alt="City profile"></img>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default City;