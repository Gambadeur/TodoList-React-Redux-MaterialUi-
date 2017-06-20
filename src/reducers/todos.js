const initialState = [];

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
        return state.concat([{ label: action.label, complete: false }]);
    case 'INIT_TODOS':
        return action.results;
    case 'TOGGLE_TODO':
        const newState = state.concat();
        newState[action.index].complete = !newState[action.index].complete;
        return newState;
    default:
        return state;
    }
}

export default todos;
