import React, { Component } from 'react';
import CreateImput from './CreateInput';
import CreateTextarea from './CrateTextarea';
import CreateSelect from './CreateSelect';
import Rare from './ObjUse';
import CreateBtn from './CreateBtn';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: ({ target }) => {
        console.log(this.props);
        const { name, value, checked } = target;
        if (name === 'cardTrunfo') {
          return this.setState({ [name]: checked });
        }
        return this.setState({ [name]: value });
      },
      onSaveButtonClick: () => {},
    };
  }

  // stateChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value });
  //   console.log(target.value);
  // }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.state;

    return (
      <>

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

        <CreateImput
          attribute="trunfo-input"
          type="checkbox"
          description="Super Trunfo"
          label="Super Trunfo "
          name="cardTrunfo"
          funct={ onInputChange }
          value={ cardTrunfo }
        />

        <CreateBtn
          attribute="save-button"
          type="submit"
          description="Salvar"
          funct={ onSaveButtonClick }
          name="hasTrunfo"
          value={ hasTrunfo }
        />

      </>

    );
  }
}

export default Form;
