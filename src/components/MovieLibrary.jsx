import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const movies = this.props.movies;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  onClick(result) {
    this.setState({ movies: [...this.state.movies, result] });
  }
  // .filter(element => element.bookmarked === this.state.bookmarkedOnly)
  // .filter(element => element.genre.includes(this.state.selectedGenre))
  filteredMovies() {
    const result = this.state.movies
      .filter((element) =>
        (element.title.toLowerCase().includes(this.state.searchText.toLowerCase())
          || element.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase())
          || element.storyline.toLowerCase().includes(this.state.searchText.toLowerCase())))
      .filter((element) => element.genre.includes(this.state.selectedGenre))
      .filter((element) => {
        if (this.state.bookmarkedOnly) {
          return element.bookmarked === this.state.bookmarkedOnly;
        }
        return true;
      })
      .map((movies) => movies);
    return (result);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
