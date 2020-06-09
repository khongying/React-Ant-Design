// REDUCER
const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case "LOADING_START":
            return state = true
        case "LOADING_END":
            return state = false
        default:
            return state;

    }
}

export default loadingReducer;
