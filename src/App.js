import React, { Component } from 'react';
import './App.css';
import TopBar from './topBar/topBar.js';
import MainWindow from './mainWindow/mainWindow.js';
import About from './about/about.js';
import Install from './install/install.js';
import NewsLetter from './newsLetter/newsLetter.js';
import Contact from './contact/contact.js';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <TopBar />
      </div>
      <div>
      <MainWindow />
      </div>
      <div>
      <About />
      </div>
      <div>
      <Install />
      </div>
      <div>
      <NewsLetter />
      </div>
      <div>
      <Contact />
      </div>
      </div>
    );
  }
}

export default App;
