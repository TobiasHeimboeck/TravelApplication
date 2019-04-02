export const getCity = (city) => {
    return {
        type: 'GET_CITY',
        city,
    }
}

export const cityIsLoading = (cityIsLoading) => {
    return {
        type: 'CITY_IS_LOADING',
        cityIsLoading,
    }
}

export const fetchCityData = (name) => {
    return (dispatch) => {
        fetch("/" + name)
            .then(response => response.json())
            .then(result => {
                dispatch(getCity(result));
                dispatch(cityIsLoading(false));
            })
            .catch(e => console.log(e));
    }
}