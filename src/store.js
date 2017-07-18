import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk' 
//
import appTransactions from './reducers/appTransactions';
import currentMovie from './reducers/currentMovie';
import movieFormData from './reducers/movieFormData';
import movies from './reducers/movies';

const reducers = combineReducers({
  appTransactions,
  currentMovie,
  movieFormData,
  movies,
})

const middleware = [ReduxThunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)