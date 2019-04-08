import React from 'react';
import { connect } from "react-redux";
import * as creator from '../store/actions/itineraryActions.js';
import PreNavbar from '../components/PreNavbar.js';
import Sidebar from '../components/Sidebar.js';

class CityPage extends React.Component {

    componentDidMount() {
        this.props.getCity(window.location.pathname.replace("/", ""));
    }

    expand(element) {
        var parent = element.target.parentNode;
        if (!parent.hasAttribute("openend")) {
            parent.setAttribute("openend", true);
            for(var i = 0; i < document.getElementsByClassName("itinery").length; i++) {
                if(!document.getElementsByClassName("itinery")[i].hasAttribute("openend")) {
                    document.getElementsByClassName("itinery")[i].style.display = "none";
                }
            }
            parent.scrollIntoView(true);
            parent.classList.add("open");            
        } else {
            for(var c = 0; c < document.getElementsByClassName("itinery").length; c++) {
                if(!document.getElementsByClassName("itinery")[c].hasAttribute("openend")) {
                    document.getElementsByClassName("itinery")[c].style.display = "block";
                }
            }
            parent.removeAttribute("openend");
            parent.classList.remove("open");
        }
    }

    render() {
        if (!this.props.cityIsLoading && this.props.city.city !== "Error: No Itinerary Found") {
            return (
                <div>
                    <Sidebar />
                    <PreNavbar />

                    <div className="contentItinery">
                        <img className="cityImage" src="https://wallpapercave.com/wp/wp1826140.jpg" alt="city wallpaper"></img>
                        <h1>Moskau</h1>

                        <div id="posts" className="itineries">
                            {this.props.city.city.map((item, index) => (
                        
                                <div key={index} className="itinery">
                                    <div className="profile">
                                        <img className="profileImage" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="profile wallpaper"></img>
                                        <p>{item.username}</p>
                                    </div>
                                    <h1 className="itineryStatus">{item.title}</h1>
                                    <i id="expander" onClick={this.expand} className="fa fa-expand-arrows-alt expand"></i>
                                    <ul>
                                        <li className="likes"> Likes: {item.rating} </li>
                                        <li className="hours"> {item.duration} Hours </li>
                                    </ul>
                                    <ul className="review">
                                        {item.hashtag.map((itemm, indexx) => (
                                            <li key={indexx}>{itemm}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Sidebar />
                    <PreNavbar />
                    <div className="no">
                        <p>There are no itineries for this city</p>
                    </div>
                    <i className="fas fa-exclamation-triangle noIcon"></i>
                </div>
            );
        }
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