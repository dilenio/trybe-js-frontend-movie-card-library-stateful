import React, { Component } from 'react';
// import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
    };
  }

  onSearchTextChange({ target }) {
    const { name } = target;

    this.setState(() => ({ [name]: target.value }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={false}
          onBookmarkedChange={this.onSearchTextChange}
          selectedGenre=""
          onSelectedGenreChange={this.onSearchTextChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: propTypes.shape({
//     title: propTypes.string,
//     subtitle: propTypes.string,
//     storyline: propTypes.string,
//     rating: propTypes.number,
//     imagePath: propTypes.string,
//     bookmarked: propTypes.bool,
//     genre: propTypes.string,
//   }).isRequired,
// };

export default MovieLibrary;
