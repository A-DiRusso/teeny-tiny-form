import React from 'react';
import './App.css';
import Output from './Output';
import Input from './Input';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        inputText: 'Georgia'
      }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input
             handleChange={this._setInputText}
             textValue = 
             {this.state.inputText}
             />
          <Output 
          text={this.state.inputText}
          />
        </header>
      </div>
    );
  }
  _setInputText = (inputText) => {
    this.setState({
      inputText
    })
  }
}



export default App;
