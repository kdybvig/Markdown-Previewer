import React, { Component } from 'react';
import './App.css';
import ControlledEditor from './containers/ControlledEditor';
import ControlledPreview from './containers/ControlledPreview'; 


class App extends Component {
  //For freeCodeCamp User Story #4, the MarkdownPreview div needs id = 'preview'
  componentDidMount() {
    const myPreview = document.getElementsByClassName('preview')[0];
    myPreview.id = 'preview';
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Markdown Previewer</h1>
        <ControlledEditor />
        <ControlledPreview />
      </div>
    );
  }
}

export default App;
