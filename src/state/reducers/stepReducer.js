const reducer = (state = 1, action) => {
    if (action.type === 'next') {
        return state + action.payload;
    }
    else if (action.type === 'prev') {
        return state - action.payload;
    }
    else {
        return state;
    }
}

export default reducer