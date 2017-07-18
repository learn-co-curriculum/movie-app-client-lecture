import MovieService from '../services/MovieService';
import { 
  makeFetchRequest, 
  finishFetchRequest,
  unsuccessfulFetchRequest
} from './appTransactions';

// Synchronous Action Creators
const successFullMoviesFetch = movies => {
  return {
    type: 'SUCCESSFUL_MOVIES_FETCH',
    movies: movies
  }
}

// Async Action Creators
export const fetchMovies = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    MovieService.fetchMovies()
      .then(movies => {
        dispatch(finishFetchRequest())
        dispatch(successFullMoviesFetch(movies))
      })
      .catch(error => {
        dispatch(unsuccessfulFetchRequest())
      })
  }
}