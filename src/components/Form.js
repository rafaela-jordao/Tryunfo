import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <br />
        <br />

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
          />
        </label>
        <br />
        <br />

        <label htmlFor="attribute">
          attr01
          <input
            data-testid="attr1-input"
            type="number"
            name="attribute"
          />
        </label>
        <br />
        <br />

        <label htmlFor="attribute">
          attr02
          <input
            data-testid="attr2-input"
            type="number"
            name="attribute"
          />
        </label>
        <br />
        <br />

        <label htmlFor="attribute">
          attr03
          <input
            data-testid="attr3-input"
            type="number"
            name="attribute"
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
          />
        </label>
        <br />
        <br />

        <label htmlFor="rarity">
          Raridade
          <select
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trybe trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
            name="trunfo"
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
