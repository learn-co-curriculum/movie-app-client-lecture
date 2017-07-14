import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '', 
      release_year: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const movie = this.state;
    this.props.addMovie(movie)
    this.setState({
      title: '', 
      release_year: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="movie_title">Title</label>
        <input 
          type="text"
          name="title"
          value={this.state.title} 
          onChange={this.handleOnChange}
          placeholder="Movie Title"
        />

        <label htmlFor="movie_release_year">Title</label>
        <input 
          type="number"
          name="release_year"
          value={this.state.release_year} 
          onChange={this.handleOnChange}
          placeholder="Movie Release Year"
        />

        <button>Add Movie</button>
      </form>
    )
  }
}

export default AddMovie;