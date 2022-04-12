import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCheckBox extends Component {
  render() {
    const { attribute, type, description, name, label, funct, checked } = this.props;
    return (

      <label htmlFor={ name } className="Inputs checkBox">
        { label }
        <input
          onChange={ funct }
          placeholder={ description }
          data-testid={ attribute }
          type={ type }
          name={ name }
          // value={ value }
          checked={ checked }
        />
      </label>

    );
  }
}

CreateCheckBox.defaultProps = {
  label: '',
};

CreateCheckBox.propTypes = {
  attribute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  funct: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CreateCheckBox;
