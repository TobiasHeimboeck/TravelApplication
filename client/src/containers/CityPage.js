import React from 'react';
import { connect } from 'react-redux';
import PreNavbar from '../components/PreNavbar.js';
import Sidebar from '../components/Sidebar.js';
import * as itineryCreator from '../store/actions/itineraryActions.js';
import * as activitiesCreator from '../store/actions/activitiesAction.js';

class CityPage extends React.Component {
   
    constructor(props) {
        super(props);
        this.activities = [];
        this.activitiesForItinery = [];
        this.bool = false;
    }

    componentDidMount() {
        this.props.getCity(window.location.pathname.replace("/", ""));
        this.props.getActivities();
    }

    getActivitiesForItinery(uuid) {
        this.activities = this.props.activities;
        var array = [];
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].uuid === uuid) {
                array.push(this.activities[i]);
            }
        }
        this.activitiesForItinery = array;
        this.bool = true;
    }

    expand(element) {
        var parent = element.parentNode;
        if (!parent.hasAttribute("openend")) {
            parent.setAttribute("openend", true);
            for (var i = 0; i < document.getElementsByClassName("itinery").length; i++) {
                if (!document.getElementsByClassName("itinery")[i].hasAttribute("openend")) {
                    document.getElementsByClassName("itinery")[i].style.display = "none";
                }
            }

            parent.scrollIntoView(true);
            parent.classList.add("open");

            if (this.activitiesForItinery.length > 0) {
                for (var e = 0; e < this.activitiesForItinery.length; e++) {
                    var activity = this.activitiesForItinery[e];
                    if (activity !== null) {
                        var div = document.createElement("div");
                        div.setAttribute("class", "activity");
                        div.innerHTML = activity.text;
                        div.style.backgroundImage = "url('" + activity.image + "')";
                        parent.appendChild(div);
                    }
                }
            } else {
                console.log("No activities avilable");
            }

            var input = document.createElement("input");
            input.setAttribute("id", "inputActivity");
            input.placeholder = "Your comment...";
            parent.appendChild(input);

        } else {
            var paras = document.getElementsByClassName('activity');
            
            parent.removeChild(document.getElementById("inputActivity"));

            while(paras[0]) {
                paras[0].parentNode.removeChild(paras[0]);
            }

            for (var c = 0; c < document.getElementsByClassName("itinery").length; c++) {
                if (!document.getElementsByClassName("itinery")[c].hasAttribute("openend")) {
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
                                    <img className="profileImage" src={item.profilePic === "" ? "https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" : item.profilePic} alt="profile wallpaper"></img>
                                        <p>{item.username}</p>
                                    </div>
                                    <h1 className="itineryStatus">{item.title}</h1>
                                    <i id="expander" onClick={(event) => {this.getActivitiesForItinery(item.uuid); this.expand(event.target);}} className="fa fa-expand-arrows-alt expand"></i>
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
    return {city: state, cityIsLoading: state.cityIsLoading, activities: state.activities, activitiesIsLoading: state.activitiesIsLoading};
}

const mapDispatchToProps = dispatch => {
    return {
        getCity: name => dispatch(itineryCreator.fetchCityData(name)),
        getActivities: () => dispatch(activitiesCreator.fetchActivities()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CityPage);