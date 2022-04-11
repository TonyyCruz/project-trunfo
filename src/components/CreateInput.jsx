import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateImput extends Component {
  render() {
    const { attribute, type, description, name, label } = this.props;
    return (

      <label htmlFor={ name }>
        { label }
        <input
          placeholder={ description }
          data-testid={ attribute }
          type={ type }
          name={ name }
        />
      </label>

    );
  }
}

CreateImput.defaultProps = {
  label: '',
};

CreateImput.propTypes = {
  attribute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default CreateImput;
