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
    movies
  }
}

const successfullyAddedMovie = movie => {
  return {
    type: 'SUCCESSFULLY_ADDED_MOVIE',
    movie
  }
}

const succefullyDeletedMovie = movieId => {
  return { 
    type: "SUCCESSFUL_MOVIE_DELETION",
    movieId
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

export const addMovie = movie => { 
  return dispatch => {
    dispatch(makeFetchRequest());
    MovieService.createMovie(movie)
      .then(movie => {
        dispatch(finishFetchRequest());
        dispatch(successfullyAddedMovie(movie));
      })
      .catch(error => console.log(error));
  }
}

export const deleteMovie = movieId => { 
  return dispatch => {
    dispatch(makeFetchRequest());
    MovieService.deleteMovie(movieId)
      .then(response => {
        if (response.ok) {
          dispatch(finishFetchRequest());
          dispatch(succefullyDeletedMovie(movieId));
        }
      })
      .catch(error => console.log(error));
  }
}


