import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
    bookmarked: propTypes.bool,
    genre: propTypes.string,
  }).isRequired,
};

export default MovieLibrary;
