import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTextarea extends Component {
  render() {
    const { attribute, type, description, name, value, funct } = this.props;
    return (

      <label htmlFor={ name } className="Inputs">
        <textarea
          onChange={ funct }
          placeholder={ description }
          data-testid={ attribute }
          type={ type }
          name={ name }
          value={ value }
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
  value: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
};

export default CreateTextarea;
