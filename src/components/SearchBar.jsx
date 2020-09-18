import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-text" data-testid="text-input-label">Inclui o texto:</label>
          <input
            type="text" id="search-text" value={searchText} onChange={onSearchTextChange}
            data-testid="text-input"
          />
          <label htmlFor="bookmarked-change" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input
            type="checkbox" id="bookmarked-change" data-testid="checkbox-input" checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="selected-genre" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            value={selectedGenre} onChange={onSelectedGenreChange}
            data-testid="select-input" id="selected-genre"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.string.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
