import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.renderTitle = this.renderTitle.bind(this);
    this.renderSubtitle = this.renderSubtitle.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderStoryline = this.renderStoryline.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.renderGenre = this.renderGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSend() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderImage() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          name="storyline"
          type="textarea"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderGenre() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.handleChange}
        >
          <option
            value="action"
            data-testid="genre-option"
          >Ação</option>
          <option
            value="comedy"
            data-testid="genre-option"
          >Comédia</option>
          <option
            value="thriller"
            data-testid="genre-option"
          >Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <input
        type="button"
        name="sendButton"
        data-testid="send-button"
        onChange={this.handleSend}
      >Adicionar filme</input>
    );
  }

  render() {
    // const { onClick } = this.props
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.renderTitle()}
          {this.renderSubtitle()}
          {this.renderImage()}
          {this.renderStoryline()}
          {this.renderRating()}
          {this.renderGenre()}
        </form>
      </div>
    );
  }
}

AddMovie.prototypes = { onClick: propTypes.func.isRequired };

export default AddMovie;
