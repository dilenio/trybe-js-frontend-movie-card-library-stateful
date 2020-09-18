import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.renderTitle = this.renderTitle.bind(this);
    this.renderSubtitle = this.renderSubtitle.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    this.setState(() => ({ [target.name]: target.value }));
  }

  renderTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          id="title"
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
          id="subtitle"
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.handleChange}
        />
      </label>
    );
  }

  render() {
    // const { onClick } = this.props
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.renderTitle()}
          {this.renderSubtitle()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
