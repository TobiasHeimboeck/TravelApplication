import React from 'react';

class CityPage extends React.Component {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    render() {
        return (
            <div>
                <p className="cityName"> {this.name} </p>
                <img className="cityImage" src={this.image} alt="City" />
                <div className="content">
                    <p className="cityHeadline">Available MYtineries</p>
                </div>
            </div>
        );
    }
}