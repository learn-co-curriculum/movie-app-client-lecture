import React, { Component } from 'react';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="main-content">
          <AddMovie addMovie={this.addMovie} />
        </div>
        <div className="sidebar">
           <Movies movies={this.props.movies}/> 
        </div>
      </div>
    );
  }
}

export default App;