import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateBtn extends Component {
  render() {
    const { attribute, description, name, funct } = this.props;
    return (

      <label htmlFor={ name }>
        <button
          type="submit"
          onClick={ funct }
          name={ name }
          data-testid={ attribute }
        >
          { description }
        </button>
      </label>

    );
  }
}

CreateBtn.propTypes = {
  attribute: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
};

export default CreateBtn;
