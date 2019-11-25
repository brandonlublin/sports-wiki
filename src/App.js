import React, { Component } from 'react';
// import './App.css';
import Navbar from "../src/components/Navbar";


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Brandon',
        completed: true
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <h4>{ this.state.todos.title }</h4>
        </header>
      </div>
    );
  }
  
}

export default App;
