export default (state = [], action) => {
  switch (action.type) {

    case "SUCCESSFUL_MOVIES_FETCH":
      return action.movies

    case "SUCCESSFULLY_ADDED_MOVIE":
      return state.concat(action.movie)

    case "SUCCESSFUL_MOVIE_DELETION":
      return state.filter(movie => movie.id !== action.movieId)

    default: 
      return state
  }
}