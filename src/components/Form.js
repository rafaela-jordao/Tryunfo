import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="inputName">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="inputName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            id="description"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="firstAttribute">
          attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="firstAttribute"
            name="firstAttribute"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="secondAttribute">
          attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="secondAttribute"
            name="secondAttribute"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="thirdAttribute">
          attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="thirdAttribute"
            name="thirdAttribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="inputRare">
          Raridade
          <select
            data-testid="rare-input"
            name="inputRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br />

        <label htmlFor="trunfo">
          Super Trybe trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
