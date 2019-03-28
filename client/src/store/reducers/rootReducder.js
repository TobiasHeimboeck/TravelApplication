const initState = {
    cities: [],
    citiesIsLoading: true,
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

    return state;
}