import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      description: '',
      firstAttribute: 0,
      secondAttribute: 0,
      thirdAttribute: 0,
      image: '',
      inputRare: 'Normal',
      trunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSaveButtonClick = () => {
    this.setState({
      inputName: '',
      description: '',
      firstAttribute: 0,
      secondAttribute: 0,
      thirdAttribute: 0,
      image: '',
      inputRare: 'Normal',
    });
  }

  validateBtn = () => {
    const { inputName, description, firstAttribute,
      secondAttribute, thirdAttribute, image } = this.state;

    const attr1 = parseInt(firstAttribute, 10);
    const attr2 = parseInt(secondAttribute, 10);
    const attr3 = parseInt(thirdAttribute, 10);
    const sum = attr1 + attr2 + attr3;

    const valueMin = 0;
    const valueMax = 90;
    const limit = 210;

    if (inputName === '' || description === '' || image === '') {
      return true;
    }

    if (attr1 < valueMin || attr1 > valueMax) {
      return true;
    }

    if (attr2 < valueMin || attr2 > valueMax) {
      return true;
    }

    if (attr3 < valueMin || attr3 > valueMax) {
      return true;
    }

    if (sum > limit) {
      return true;
    }
  }

  render() {
    const { inputName, description, firstAttribute, secondAttribute, thirdAttribute,
      image, inputRare, trunfo } = this.state;

    return (
      <div>
        <Form
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ this.validateBtn() }
          cardName={ inputName }
          cardDescription={ description }
          cardAttr1={ firstAttribute }
          cardAttr2={ secondAttribute }
          cardAttr3={ thirdAttribute }
          cardImage={ image }
          cardRare={ inputRare }
          cardTrunfo={ trunfo }
        />
        <Card
          onInputChange={ this.handleChange }
          cardName={ inputName }
          cardDescription={ description }
          cardAttr1={ firstAttribute }
          cardAttr2={ secondAttribute }
          cardAttr3={ thirdAttribute }
          cardImage={ image }
          cardRare={ inputRare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
