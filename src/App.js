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
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form appState={ this.state } />
      </div>
    );
  }
}

export default App;
