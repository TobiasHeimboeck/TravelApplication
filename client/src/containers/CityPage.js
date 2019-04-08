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
        parent.scrollIntoView(true);
    }

    render() {
        return (
            <div>
                <Sidebar />
                <PreNavbar />
                <div className="contentItinery">
                    <img className="cityImage" src="https://wallpapercave.com/wp/wp1826140.jpg" alt="city wallpaper"></img>
                    <h1>Moskau</h1>
                    <div id="posts" className="itineries">
                        <div className="itinery">
                            <div className="profile">
                                <img className="profileImage" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="profile wallpaper"></img>
                                <p>Gaudi Lover</p>
                            </div>
                            <h1 className="itineryStatus">Gaudi In a day</h1>
                            <i id="expander" onClick={this.expand} className="fa fa-expand-arrows-alt expand"></i>
                            <ul>
                                <li className="likes"> Likes: 34 </li>
                                <li className="hours"> 12 Hours </li>
                            </ul>
                            <ul className="review">
                                <li>#test</li>
                                <li>#test1</li>
                                <li>#test2</li>
                                <li>#test3</li>
                            </ul>
                        </div>

                        <div className="itinery">
                            <div className="profile">
                                <img className="profileImage" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="profile wallpaper"></img>
                                <p>Test Person</p>
                            </div>
                            <h1 className="itineryStatus">Gaudi In a day</h1>
                            <i id="expander" onClick={this.expand} className="fa fa-expand-arrows-alt expand"></i>
                            <ul>
                                <li className="likes"> Likes: 101 </li>
                                <li className="hours"> 13 Hours </li>
                            </ul>
                            <ul className="review">
                                <li>#test</li>
                                <li>#test1</li>
                                <li>#test2</li>
                            </ul>
                        </div>

                        <div className="itinery">
                            <div className="profile">
                                <img className="profileImage" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="profile wallpaper"></img>
                                <p>Gaudi Lover</p>
                            </div>
                            <h1 className="itineryStatus">Gaudi In a day</h1>
                            <i id="expander" onClick={this.expand} className="fa fa-expand-arrows-alt expand"></i>
                            <ul>
                                <li className="likes"> Likes: 35 </li>
                                <li className="hours"> 12 Hours </li>
                            </ul>
                            <ul className="review">
                                <li>#test</li>
                                <li>#test1</li>
                                <li>#test2</li>
                                <li>#test3</li>
                            </ul>
                        </div>
                    </div>
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