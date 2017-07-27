const API_URL = process.env.REACT_APP_API_URL;

const MovieService = {
  fetchMovies() {
    return fetch(`${API_URL}/movies`)
      .then(response => response.json())
  },

  createMovie(movie) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        movie: movie
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch(`${API_URL}/movies`, request)
      .then(response => response.json())
  },

  deleteMovie(movieId) {
    const request = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch(`${API_URL}/movies/${movieId}`, request)
  }
}

export default MovieService;