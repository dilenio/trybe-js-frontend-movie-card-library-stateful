import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  renderInputSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search-text" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          id="search-text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </label>
    );
  }

  renderBookmarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarked-change" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="bookmarked-change"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />{' '}
      </label>
    );
  }

  renderSelectedGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selected-genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
          id="selected-genre"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          {this.renderInputSearch()};{this.renderBookmarked()};
          {this.renderSelectedGenre()};
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
