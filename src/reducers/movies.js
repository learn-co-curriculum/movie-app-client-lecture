export default (state = [], action) => {
  switch (action.type) {

    case "SUCCESSFUL_MOVIES_FETCH":
      return action.movies

    default: 
      return state
  }
}