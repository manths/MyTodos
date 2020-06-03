import {combineReducers} from 'redux';
import todos from './todoList';

const rootReducer = combineReducers({
    todos
})
export default rootReducer;