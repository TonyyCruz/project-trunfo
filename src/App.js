import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import BtnValidation from './components/BtnValidation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.stateChange,
      onSaveButtonClick: this.saveCheck,
      // attributeCheck: this.attributeCheck(),
    };
  }

  // altera os valores do state. <====
  stateChange = ({ target }) => {
    const { onSaveButtonClick } = this.state;
    const { name, value, checked } = target;
    if (name === 'cardTrunfo') {
      this.setState({ [name]: checked });
    }
    if (name === 'cardRare') {
      this.setState({ [name]: value });
    }
    this.setState({ [name]: value });
    onSaveButtonClick();
  }

  // verifica se os campos estão preenchidos corretamente. <====
  saveCheck = () => {
    const max = 90;
    const maxSum = 210;

    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;

    const atributes = [cardAttr1, cardAttr2, cardAttr3];
    const content = [cardName.length, cardDescription.length,
      cardImage.length, cardRare.length];

    const teste1 = atributes.every((a) => a > 0 && a < max);
    const teste2 = parseFloat(cardAttr1) + parseFloat(cardAttr2)
    + parseFloat(cardAttr3) < maxSum;
    const teste3 = content.every((a) => a > 0);
    const changeEnable = teste1 && teste2 && teste3;
    if (changeEnable) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
