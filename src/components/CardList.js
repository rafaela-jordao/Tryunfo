import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardList } = this.props;
    return (
      <div>
        {
          cardList.map(({
            inputName,
            description,
            firstAttribute,
            secondAttribute,
            thirdAttribute,
            image,
            inputRare,
            trunfo,
          }) => (<Card
            key={ inputName }
            cardName={ inputName }
            cardDescription={ description }
            cardAttr1={ firstAttribute }
            cardAttr2={ secondAttribute }
            cardAttr3={ thirdAttribute }
            cardImage={ image }
            cardRare={ inputRare }
            cardTrunfo={ trunfo }
          />))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default CardList;
