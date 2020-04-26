import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSpeech: '',
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Wrapper />
        <div class="main">
          <div class="section text-center">
            <button>Listen</button>
            <p>{this.state.inputSpeech}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
