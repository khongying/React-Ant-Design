// REDUCER
const initialState = {
    toast: {},
};

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOAST_NOTIFICATION":
            return {...state, toast: action.payload}
        default:
            return state;

    }
}

export default toastReducer;
