import React, { Component } from 'react';
import './newsLetter.css';
import { Grid } from '@material-ui/core';




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
      <div id ="con3">Subscribe to our NewsLetter to get updates about Project HawkEye
      </div>
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
      <input id="text_field" type="text" />
        <button id="text_button" type="text" >Add Me</button>

    </Grid>

      </Grid>
    </div>

    );
  }
}

export default NewsLetter;
