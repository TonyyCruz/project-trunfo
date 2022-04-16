import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/style.css';
import Button from './components/CreateBtn';
import CreateImput from './components/CreateInput';

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
      textFilter: '',
      cardFilter: [],
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
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;

    const max = 90;
    const maxSum = 210;

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
      if (cardTrunfo) { this.setState({ hasTrunfo: true, cardTrunfo: false }); }
    });
  }

  dellCard = ({ target }) => {
    const { cards } = this.state;
    if (target.value) { this.setState({ hasTrunfo: false }); }
    const cardList = cards.filter((c) => c.cardName !== target.name);
    this.setState({ cards: cardList });
  };

  FindCard = ({ target }) => {
    const { cards } = this.state;

    this.setState({ textFilter: target.value });

    const filter = cards.filter((c) => c.cardName.includes(target.value));

    this.setState({ cardFilter: filter });
  }

  //----------------------------------------------------------------------

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, textFilter, cardFilter, cards } = this.state;

    const cardPreview = (
      <div className="cardPreview">
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

    const displayCards = (textFilter.length >= 1)
      ? cardFilter : cards;

    return (
      <div className="main-contain">
        <h1>Tryunfo</h1>

        <div className="form-contain">
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

          { cardPreview }
        </div>

        <CreateImput
          attribute="name-filter"
          type="text"
          description="Buscar Carta"
          name="name-filter"
          funct={ this.FindCard }
          value={ textFilter }
        />

        <div className="cards-contain">
          { displayCards.map((a, b) => (
            <div key={ b }>
              <div className="card">
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
              <Button
                attribute="delete-button"
                type="button"
                description="Excluir"
                funct={ this.dellCard }
                name={ a.cardName }
                value={ a.cardTrunfo }
                isDisable={ false }
              />
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default App;
