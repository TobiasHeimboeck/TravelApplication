const initState = {
    cities: [],
    city: [],
    activities: [],
    user: [],
};

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
            citiesIsLoading: action.citiesIsLoading,
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

    if (action.type === "GET_USER") {
        state = {
            ...state,
            user: action.user
        }
    }

    if (action.type === "USER_IS_LOADING") {
        state = {
            ...state,
            userIsLoading: action.userIsLoading
        }
    }

    return state;
}