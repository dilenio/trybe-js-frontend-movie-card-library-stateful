import React from 'react';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props
    return <div>
      <form data-testid="add-movie-form">
      </form>
    </div>;
  }
}

export default AddMovie;
