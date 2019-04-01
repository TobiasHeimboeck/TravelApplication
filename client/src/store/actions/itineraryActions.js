export const getCity = (city) => {
    return {
        type: 'GET_CITY',
        city
    }
}

export const cityIsLoading = (cityIsLoading) => {
    return {
        type: 'CITY_IS_LOADING',
        cityIsLoading
    }
}

export const fetchCitiesData = (name) => {
    return (dispatch) => {
        fetch("/cities/city/" + name)
            .then(response => response.json())
            .then(result => {
                dispatch(getCity(result));
                dispatch(cityIsLoading(false));
            })
            .catch(e => console.log(e));
    }
}