import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateBtn extends Component {
  render() {
    const { attribute, description, name, funct, value, isDisable } = this.props;
    return (

      <label htmlFor={ name } className="Inputs">
        <button
          type="submit"
          onClick={ funct }
          name={ name }
          data-testid={ attribute }
          value={ value }
          disabled={ isDisable }
        >
          { description }
        </button>
      </label>

    );
  }
}

CreateBtn.propTypes = {
  attribute: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  isDisable: PropTypes.bool.isRequired,
};

export default CreateBtn;
