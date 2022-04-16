import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateCheckBox from './CreateCheckBox';
import CreateSelect from './CreateSelect';
import CreateInput from './CreateInput';
import rareSelect from './ObjUse';

class Filters extends Component {
  render() {
    const { findTrunfo, filterDisabled, FindRare,
      rareFilter, FindCard, textFilter } = this.props;

    return (
      <>
        <CreateCheckBox
          attribute="trunfo-filter"
          type="checkbox"
          description="Filtro Trunfo"
          label="Filtro Trunfo "
          name="Trunfo-Filter"
          funct={ findTrunfo }
          checked={ filterDisabled }
        />

        <CreateSelect
          attribute="rare-filter"
          options={ rareSelect }
          name="cardRare"
          funct={ FindRare }
          value={ rareFilter }
          description="Buscar raridade: "
          isDisable={ filterDisabled }
        />
        <CreateInput
          attribute="name-filter"
          type="text"
          description="Buscar Carta"
          name="name-filter"
          funct={ FindCard }
          value={ textFilter }
          isDisable={ filterDisabled }
        />
      </>
    );
  }
}

Filters.propTypes = {
  textFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
  findTrunfo: PropTypes.func.isRequired,
  FindCard: PropTypes.func.isRequired,
  FindRare: PropTypes.func.isRequired,
};

export default Filters;
