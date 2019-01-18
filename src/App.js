import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      field: this.getText()
    };
    this.saveText = this.saveText.bind(this);
  }

  getText() {
    const savedText = (localStorage.getItem('backup') !== null) ? JSON.parse(localStorage.getItem('backup')) : {text: ''};

    return savedText;
  }

  saveMe(obj) {
    localStorage.setItem('backup', JSON.stringify(obj));
  }

  saveText(e) {
    const value = e.currentTarget.value;
    const object = {text: value};
    
    this.saveMe(object);
    this.setState({
      field: object
    });
  }

  render() {
    return (
      <div className="app">
        <textarea
          name="field"
          id="field"
          cols="30"
          rows="5"
          className="field"
          defaultValue={this.state.field.text}
          onKeyUp={this.saveText}
        ></textarea>
      </div>
    );
  }
}

export default App;
