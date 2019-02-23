import React, { Component } from 'react';
import './mainWindow.css';

class MainWindow extends Component {
  render() {
    const VANTA = window.VANTA;

    window.onload=function(){
      VANTA.NET({
        el: "#net",
        color: 0x603fff,
        backgroundColor: 0x0
      })

    }

    return (
      <div id="net">
      <h1 id="title">Let's Grow Together</h1>
      <h2 id="sub-title"> HawkEye is a Open Source Library in Python for Wealth Management</h2>
       </div>
    );
  }
}

export default MainWindow;
