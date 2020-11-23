import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getValuesWithAnswer() {
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  return {value1, value2, value3, proposedAnswer};
}

class App extends Component {
  state = {
    value1: null,
    value2: null,
    value3: null,
    proposedAnswer: null,
    numQuestions: 0,
    numCorrect: 0
  }

  componentDidMount() {
    const {value1, value2, value3, proposedAnswer} = getValuesWithAnswer();
	this.setState({value1, value2, value3, proposedAnswer});
  }

  onTrue = () => {
    const checkAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    if (checkAnswer === this.state.proposedAnswer) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    const {value1, value2, value3, proposedAnswer} = getValuesWithAnswer();
    
    this.setState({value1, value2, value3, proposedAnswer, numQuestions: this.state.numQuestions + 1});
  }

  onFalse = () => {
    const checkAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    if (checkAnswer !== this.state.proposedAnswer) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    const {value1, value2, value3, proposedAnswer} = getValuesWithAnswer();
    
    this.setState({value1, value2, value3, proposedAnswer, numQuestions: this.state.numQuestions + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.onTrue}>True</button>
          <button onClick={this.onFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
