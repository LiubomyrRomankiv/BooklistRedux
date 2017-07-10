import { combineReducers } from 'redux';
import booksReduser from './reduser_books';

const rootReducer = combineReducers({
  books: booksReduser
});

export default rootReducer;
