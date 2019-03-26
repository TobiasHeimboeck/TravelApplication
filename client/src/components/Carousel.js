import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBContainer } from 'mdbreact';
import data from '../assets/json/data.js';
import CItem from './CItem.js';

class Carousel extends React.Component {
    
    constructor() {
        super();
        this.content = this.createTable();
    }

    createTable() {
        var list = [];

        for (var i = 0; i < data.length; i++) {
            list.push(
                <CItem key={i} itemId={i} title={data[i].name} src={data[i].image} />
            );
        }

        return list;
    }

    render() {
        return (
            <MDBContainer className="carousel">
              <h4 className="mt-5 mb-2">Popular MYtineraries</h4>
              <MDBCarousel activeItem={1} length={12} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    {this.content}
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
        );
    }   
}

export default Carousel;