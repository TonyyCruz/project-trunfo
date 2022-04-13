import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateImput from './CreateInput';
import CreateTextarea from './CrateTextarea';
import CreateSelect from './CreateSelect';
import Rare from './ObjUse';
import CreateBtn from './CreateBtn';
import './style.css';
import CreateCheckBox from './CreateCheckBox';

class Form extends Component {
  render() {
    // const { appState } = this.props;

    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (

      <form className="create-form">
        <fieldset className="Fieldset">

          <CreateImput
            attribute="name-input"
            type="text"
            description="Nome Da Carta"
            name="cardName"
            funct={ onInputChange }
            value={ cardName }
          />

          <CreateTextarea
            attribute="description-input"
            type="text"
            description="Descrição Da Carta"
            name="cardDescription"
            funct={ onInputChange }
            value={ cardDescription }
          />

          <CreateImput
            attribute="attr1-input"
            type="number"
            description="Primiro Atrubuto"
            name="cardAttr1"
            funct={ onInputChange }
            value={ cardAttr1 }
          />

          <CreateImput
            attribute="attr2-input"
            type="number"
            description="Segundo Atrubuto"
            name="cardAttr2"
            funct={ onInputChange }
            value={ cardAttr2 }
          />

          <CreateImput
            attribute="attr3-input"
            type="number"
            description="Terceiro Atrubuto"
            name="cardAttr3"
            funct={ onInputChange }
            value={ cardAttr3 }
          />

          <CreateImput
            attribute="image-input"
            type="text"
            description="Inserir Imagem"
            name="cardImage"
            funct={ onInputChange }
            value={ cardImage }
          />

          <CreateSelect
            attribute="rare-input"
            options={ Rare }
            name="cardRare"
            funct={ onInputChange }
            value={ cardRare }
          />

          <CreateCheckBox
            attribute="trunfo-input"
            type="checkbox"
            description="Super Trunfo"
            label="Super Trunfo "
            name="cardTrunfo"
            funct={ onInputChange }
            checked={ cardTrunfo }
          />

          <CreateBtn
            attribute="save-button"
            type="submit"
            description="Salvar"
            funct={ onSaveButtonClick }
            name="hasTrunfo"
            value={ hasTrunfo }
            active={ isSaveButtonDisabled }
          />

        </fieldset>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
