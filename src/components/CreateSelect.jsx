import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateSelect extends Component {
  render() {
    const { attribute, options, name } = this.props;
    return (

      <label htmlFor={ name }>
        <select
          data-testid={ attribute }
          name={ name }
        >
          { options.map((a, b) => <option key={ b } value={ a }>{ a }</option>)}
        </select>
      </label>

    );
  }
}

CreateSelect.propTypes = {
  attribute: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String).isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateSelect;
