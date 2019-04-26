import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBContainer } from 'mdbreact';
import data from '../assets/json/data.js';
import CItem from './CItem.js';

class Carousel extends React.Component {
    render() {
        return (
            <MDBContainer className="carousel">
              <MDBCarousel activeItem={1} length={11} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    {data.map((item, index) => (
                        <CItem key={index} itemId={index} title={item.name} image={item.image} />
                    ))}
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
        );
    }
}

export default Carousel;