import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/style.css';

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
      cards: [],
      onInputChange: this.stateChange,
      onSaveButtonClick: this.saveCard,
      attributeCheck: this.saveCheck,
    };
  }

  // altera os valores do state. <====
  stateChange = ({ target }) => {
    const { attributeCheck, cardTrunfo } = this.state;
    const { name, value } = target;
    if (name === 'cardTrunfo') {
      if (cardTrunfo) {
        return this.setState({ cardTrunfo: false });
      }
      return this.setState({ cardTrunfo: true });
    }

    if (name === 'cardRare') {
      this.setState({ [name]: value }, () => {
        attributeCheck();
      });
    }
    this.setState({ [name]: value }, () => {
      attributeCheck();
    });
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

    const teste1 = atributes.every((a) => a >= 0 && a <= max);
    const teste2 = parseFloat(cardAttr1) + parseFloat(cardAttr2)
    + parseFloat(cardAttr3) <= maxSum;
    const teste3 = content.every((a) => a > 0);
    const changeEnable = teste1 && teste2 && teste3;
    if (changeEnable) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  };

  saveCard = (event) => {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state;

    this.setState(({ cards }) => ({
      cards: [...cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }] }), () => {
      const resetValues = ['cardName', 'cardDescription', 'cardImage'];
      const resetAtt = ['cardAttr1', 'cardAttr2', 'cardAttr3'];

      this.setState({ cardRare: 'normal' });
      resetValues.forEach((a) => this.setState({ [a]: '' }));
      resetAtt.forEach((a) => this.setState({ [a]: '0' }));
      if (cardTrunfo) { this.setState({ hasTrunfo: true }); }
    });
  }

  //----------------------------------------------------------------------

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, cards } = this.state;

    const cardSave = (<Card
      cardName={ cardName }
      cardDescription={ cardDescription }
      cardAttr1={ cardAttr1 }
      cardAttr2={ cardAttr2 }
      cardAttr3={ cardAttr3 }
      cardImage={ cardImage }
      cardRare={ cardRare }
      cardTrunfo={ cardTrunfo }
    />);

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

        { cardSave }

        { cards.map((a, b) => (
          <div key={ b } className="card">
            <Card
              cardName={ a.cardName }
              cardDescription={ a.cardDescription }
              cardAttr1={ a.cardAttr1 }
              cardAttr2={ a.cardAttr2 }
              cardAttr3={ a.cardAttr3 }
              cardImage={ a.cardImage }
              cardRare={ a.cardRare }
              cardTrunfo={ a.cardTrunfo }
            />
          </div>
        ))}

      </div>
    );
  }
}

export default App;
