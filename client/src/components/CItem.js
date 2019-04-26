import React from 'react';
import { MDBCarouselCaption, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';

class CItem extends React.Component {

    constructor(props) {
        super(props);
        this.itemId = {itemId: props.itemId};
        this.title = {title: props.title};
        this.image = {src: props.image};
    }

    render() {
        return (
            <MDBCarouselItem itemId={this.itemId.itemId}>
                <MDBView>
                    <img className="d-block w-100" src={this.image.src} alt="First slide" />
                    <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <p className="carouselText">
                        Find your perfect trip, designed by insiders who 
                        <br></br>
                        know and love their cities.
                    </p>
                    <h3 className="h3-responsive">{this.title.title}</h3>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        );
    }
}

export default CItem;