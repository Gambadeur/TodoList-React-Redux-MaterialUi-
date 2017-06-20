const initialState = "none"

function visibilityFilter(state = initialState, action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}

export default visibilityFilter