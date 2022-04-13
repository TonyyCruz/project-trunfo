import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnValidation extends Component {
  attributeCheck = (atributes) => {
    const max = 90;
    const maxSum = 210;
    const teste1 = atributes.every((a) => a > 0 && a < max);
    const teste2 = atributes[0] + atributes[1] + atributes[2] < maxSum;
    if (teste1 && teste2) { return 'sim'; }
    return 'Não';
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, isSaveButtonDisabled } = this.props;

    const attribute = [cardAttr1, cardAttr2, cardAttr3];
    return (
      <p>{ BtnValidation(attribute) }</p>
    );
  }
}

BtnValidation.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  // onInputChange: PropTypes.func.isRequired,
  // onSaveButtonClick: PropTypes.func.isRequired,
};

export default BtnValidation;
