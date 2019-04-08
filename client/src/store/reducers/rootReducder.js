const initState = {
    cities: [],
    city: [],
    activities: []
}

export const rootReducer = (state = initState, action) => {

    if (action.type === "GET_ACTIVITIES") {
        state = {
            ...state,
            activities: action.activities
        }
    }

    if (action.type === "ACTIVITIES_IS_LOADING") {
        state = {
            ...state,
            activitiesIsLoading: action.activitiesIsLoading
        }
    }

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
            city: action.city.message
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