import React, { Component } from 'react';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import MovieService from './services/MovieService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    MovieService.fetchMovies().then(movies => this.setState({ movies }))
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
           <Movies movies={this.state.movies}/> 
        </div>
        <div className="main-content">
          <AddMovie addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default App;
