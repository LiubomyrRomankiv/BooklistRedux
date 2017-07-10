import { combineReducers } from 'redux';
import BooksReduser from './reduser_books';
import ActiveBook from './reduser_active_book';

const rootReducer = combineReducers({
  books: BooksReduser,
  activeBook: ActiveBook
});

export default rootReducer;
