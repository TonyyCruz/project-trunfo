import React from 'react';
import Form from './components/Form';

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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: ({ target }) => {
        console.log('teste');
        const { name, value, checked } = target;
        if (name === 'cardTrunfo') {
          return this.setState({ [name]: checked });
        }
        return this.setState({ [name]: value });
      },
      onSaveButtonClick: () => {},
    };
  }

  // imputChange = ({ target }) => {
  //   console.log('teste');
  //   const { name, value, checked } = target;
  //   if (name === 'cardTrunfo') {
  //     return this.setState({ [name]: checked });
  //   }
  //   return this.setState({ [name]: value });
  // }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        {/* <Form appState={ this.state } /> */}
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
      </div>
    );
  }
}

export default App;
