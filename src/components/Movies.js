import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../actions/movies';

class Movies extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const renderMovies = this.props.movies.map(movie => 
      <p key={movie.id}>
        {movie.title} <span onClick={() => this.props.deleteMovie(movie.id)}>X</span>
      </p>
    )

    return (
      <div>
        {renderMovies}
      </div>
    )
  }
}

export default connect(
  state => ({
    movies: state.movies, 
  }),
  { fetchMovies, deleteMovie }
)(Movies);
