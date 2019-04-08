export const getActivities = (activities) => {
    return {
        type: 'GET_ACTIVITIES',
        activities
    }
}

export const activitiesIsLoading = (activitiesIsLoading) => {
    return {
        type: 'ACTIVITIES_IS_LOADING',
        activitiesIsLoading
    }
}

export const fetchActivitiesData = () => {
    return (dispatch) => {
        fetch("/cities/activities")
            .then(response => response.json())
            .then(result => {
                dispatch(getActivities(result));
                dispatch(activitiesIsLoading(false));
            })
            .catch(e => console.log(e));
    }
}