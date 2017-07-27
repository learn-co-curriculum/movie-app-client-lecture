import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movies';

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
      <div className="uk-form-file">
        <form onSubmit={this.handleOnSubmit}>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <label htmlFor="movie_title">Title</label>
              <input 
                type="text"
                name="title"
                className="uk-input"
                value={this.state.title} 
                onChange={this.handleOnChange}
                placeholder="Movie Title"
              />
            </div>
          
            <div className="uk-margin">
              <label htmlFor="movie_release_year">Release Year</label>
              <input 
                type="number"
                name="release_year"
                className="uk-input"
                value={this.state.release_year} 
                onChange={this.handleOnChange}
                placeholder="Movie Release Year"
              />
            </div>
            

            <button className="uk-button">Add Movie</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(null, { addMovie })(AddMovie);