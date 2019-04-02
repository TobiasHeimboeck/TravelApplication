const initState = {
    cities: [],
    citiesIsLoading: true,

    title: "",
    profilePic: "",
    rating: 0,
    duration: 0,
    price: 0,
    hashtag: [],
    reference: [],
    cityIsLoading: true,
}

export const rootReducer = (state = initState, action) => {

    if (action.type === "GET_CITIES") {
        state = {
            ...state,
            cities: action.cities
        }
    }

    if (action.type === "CITIES_IS_LOADING") {
        state = {
            ...state,
            citiesIsLoading: action.citiesIsLoading
        }
    }

    if (action.type === "GET_CITY") {
        state = {
            ...state,
            title: action.title,
            profilePic: action.profilePic,
            rating: action.rating,
            duration: action.duration,
            price: action.price,
            hashtag: action.hashtag,
            reference: action.reference,
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