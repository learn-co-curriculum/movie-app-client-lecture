export default (state = [], action) => {
  switch (action.type) {

    case "SUCCESSFUL_MOVIES_FETCH":
      return action.movies

    case "SUCCESSFULLY_ADDED_MOVIE":
      return state.concat(action.movie)

    default: 
      return state
  }
}