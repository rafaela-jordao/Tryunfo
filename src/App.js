import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      description: '',
      firstAttribute: '',
      secondAttribute: '',
      thirdAttribute: '',
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

  render() {
    const { inputName, description, firstAttribute, secondAttribute, thirdAttribute,
      image, inputRare, trunfo } = this.state;

    return (
      <div>
        <Form
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
