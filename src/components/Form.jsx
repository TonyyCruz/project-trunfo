import React, { Component } from 'react';
import CreateImput from './CreateInput';
import CreateTextarea from './CrateTextarea';
import CreateSelect from './CreateSelect';
import Rare from './ObjUse';
import CreateBtn from './CreateBtn';

class Form extends Component {
  save = () => {};

  render() {
    return (
      <>
        <CreateImput
          attribute="name-input"
          type="text"
          description="Nome Da Carta"
          name="Card_name"
        />

        <CreateTextarea
          attribute="description-input"
          type="text"
          description="Descrição Da Carta"
          name="Card_description"
        />

        <CreateImput
          attribute="attr1-input"
          type="number"
          description="Primiro Atrubuto"
          name="first_attribute"
        />

        <CreateImput
          attribute="attr2-input"
          type="number"
          description="Segundo Atrubuto"
          name="second_attribute"
        />

        <CreateImput
          attribute="attr3-input"
          type="number"
          description="Terceiro Atrubuto"
          name="third_attribute"
        />

        <CreateImput
          attribute="image-input"
          type="text"
          description="Inserir Imagem"
          name="card_image"
        />

        <CreateSelect
          attribute="rare-input"
          name="rare-input"
          options={ Rare }
        />

        <CreateImput
          attribute="trunfo-input"
          type="checkbox"
          description="Super Trunfo"
          name="trunfo_check"
          label="Super Trunfo "
        />

        <CreateImput
          attribute="save-button"
          type="submit"
          description="Salvar"
          name="save-btn"
          funct={ this.save }
        />
      </>

    );
  }
}

export default Form;
