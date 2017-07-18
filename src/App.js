import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import MovieService from './services/MovieService';
import { fetchMovies } from './actions/movies';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  addMovie = movie => {
    MovieService.createMovie(movie).then(movie => this.setState({
      movies: this.state.movies.concat(movie)
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
           <Movies movies={this.props.movies}/> 
        </div>
        <div className="main-content">
          <AddMovie addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    movies: state.movies, 
    currentMovie: state.currentMovie,
    movieFormData: state.movieFormData
  }),
  { fetchMovies }
)(App);
