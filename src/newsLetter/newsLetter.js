import React, { Component } from 'react';
import './newsLetter.css';
import { Grid } from '@material-ui/core';
import * as firebase from 'firebase';

class NewsLetter extends Component {
  render() {

    return (
      <div id="main">
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
      <code id="code" type="text"><b>pip install hawkeyelib</b></code>
      </Grid>
      <div id ="con3">Note: The library is built for Python 3 and you many face issues if using on Python 2.
    
      </div>
    </div>

    );
  }
}

export default NewsLetter;
