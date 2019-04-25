export const getUser = (user) => {
    return {
        type: 'GET_USER',
        user,
    }
}

export const userIsLoading = (userIsLoading) => {
    return {
        type: 'USER_IS_LOADING',
        userIsLoading,
    }
}

export const fetchUserData = (uuid) => {
    return (dispatch) => {
        fetch("/api/user/" + uuid)
            .then(response => response.json())
            .then(result => {
                dispatch(getUser(result));
                dispatch(userIsLoading(false));
            })
            .catch(e => console.log(e));
    }
}