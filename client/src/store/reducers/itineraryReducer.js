const initState = {
    title: "",
    profilePic: "",
    rating: 0,
    duration: 0,
    price: 0,
    hashtag: [],
    cityIsLoading: true,
}

export const itineraryReducer = (state = initState, action) => {
    if (action.type === "GET_ITINERARY") {
        state = {
            ...state,
            title: action.title,
            profilePic: action.profilePic,
            rating: action.rating,
            duration: action.duration,
            price: action.price,
            hashtag: action.hashtag
        }
    }
    
    if (action.type === "CITY_IS_LOADING") {
        state = {
            ...state,
            cityIsLoading: action.cityIsLoading
        }
    }

    return state;
}