import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';
import filter from './reducers/filter'

const reducer = combineReducers({ todos, filter });
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store