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

const color = blue[800];
const styles = {
  root: {
    flexGrow: 2,
  },
  
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        
        <Toolbar> 
      
        <img src={logo} id="logo"  alt="logo" />
                  
          <h4 id="main-title">
            HawkEye
          </h4>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);




