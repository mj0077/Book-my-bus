export const userReducer = (state = [], action) => {
    if (action.type === "add") {
        state.push(action.payload);
        return state;
        // return [...state, action.payload]
    }
    else {
        return state
    }
}

// export default userReducer;