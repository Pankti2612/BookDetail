import { combineReducers } from 'redux';
import BookReducer from './reduceBook';
import ActiveBook from './reduceActiveBook';

const rootReducer = combineReducers({
  books : BookReducer,
  activeBook : ActiveBook
});

export default rootReducer;
