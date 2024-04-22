export const next = () => {
    return (dispatch) => {
        dispatch({
            type: 'next',
            payload: 1
        })
    }
}
export const prev = () => {
    return (dispatch) => {
        dispatch({
            type: 'prev',
            payload: 1
        })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: user
        })
    }
}

export const toggleLogin = (loggedIn) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload: !loggedIn
        })
    }
}