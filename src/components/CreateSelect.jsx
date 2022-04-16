import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateSelect extends Component {
  render() {
    const { attribute, options, name, funct, value, description,
      isDisabled } = this.props;
    return (

      <label htmlFor={ name }>
        { description }
        <select
          className="Inputs"
          data-testid={ attribute }
          name={ name }
          onChange={ funct }
          value={ value }
          disabled={ isDisabled }
        >
          { options.map((a, b) => <option key={ b } value={ a }>{ a }</option>)}
        </select>
      </label>

    );
  }
}

CreateSelect.defaultProps = {
  isDisabled: false,
};

CreateSelect.propTypes = {
  attribute: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String).isRequired,
  name: PropTypes.string.isRequired,
  funct: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default CreateSelect;
