import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateImput extends Component {
  render() {
    const { attribute, type, description, name, label,
      value, funct, isDisabled } = this.props;
    return (

      <label htmlFor={ name } className="Inputs">
        { label }
        <input
          onChange={ funct }
          placeholder={ description }
          data-testid={ attribute }
          type={ type }
          name={ name }
          value={ value }
          disabled={ isDisabled }
        />
      </label>

    );
  }
}

CreateImput.defaultProps = {
  label: '',
  isDisabled: false,
};

CreateImput.propTypes = {
  attribute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default CreateImput;
