import React from 'react';

import './topBar.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from './hawk-bird-animal-shape.svg';
import blue from '@material-ui/core/colors/blue';
import Git_icon from './Github_logo.svg';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
const color = blue[800];
const styles = {
  root: {
    flexGrow: 1,
  },

};
const styles1 = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 40,
  },
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">

        <Toolbar>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <div>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <img src={logo} id="logo"  alt="logo" />

          <a id="main-title">
           Project HawkEye
          </a>
          </Grid>
          </div>


         <div>
         <Button id="About_Button" className={classes.button} >
          About
        </Button>
        <Button id="Install_Button" className={classes.button} >
          Install
        </Button>

        <Button id="Newsletter_Button" className={classes.button} >
          Newsletter
        </Button>
        <Button id="Contact_Button" className={classes.button} >
          Contact
        </Button>

       <Button id="Git_Button" className={classes.button} href="https://github.com/projecthawkeye">
        <img src={Git_icon} alt="Git_hub" height="45" width="45" />
        </Button>
        </div>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleAppBar);
