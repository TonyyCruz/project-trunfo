import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTextarea extends Component {
  render() {
    const { attribute, type, description, name } = this.props;
    return (

      <label htmlFor={ name }>
        <textarea
          placeholder={ description }
          data-testid={ attribute }
          type={ type }
          name={ name }
        />
      </label>

    );
  }
}

CreateTextarea.propTypes = {
  attribute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateTextarea;
