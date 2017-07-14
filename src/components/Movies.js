import React from 'react';

const Movies = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <p key={movie.id}>{movie.title}</p>
  )

  return (
    <div>
      {renderMovies}
    </div>
  )
}

export default Movies;