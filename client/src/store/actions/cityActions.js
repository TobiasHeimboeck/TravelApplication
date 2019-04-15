export const getCities = (cities) => {
    return {
        type: 'GET_CITIES',
        cities
    }
}

export const citiesIsLoading = (citiesIsLoading) => {
    return {
        type: 'CITIES_IS_LOADING',
        citiesIsLoading
    }
}

export const fetchCitiesData = () => {
    return (dispatch) => {
        fetch("/api/all")
            .then(response => response.json())
            .then(result => {
                dispatch(getCities(result));
                dispatch(citiesIsLoading(false));
            })
            .catch(e => console.log(e));
    }
}