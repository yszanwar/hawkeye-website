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
const color = blue[800];
const styles = {
  root: {
    flexGrow: 2,
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
    fontSize: 25,
  },
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        
        <Toolbar> 
      
        <img src={logo} id="logo"  alt="logo" />
                  
          <h4 id="main-title">
            <b></b> Project HawkEye
          </h4>


          <Button variant="contained" color="secondary" className={classes.button}>
        
        <img src={Git_icon} alt="Git_hub" height="30" width="30" />
      </Button>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleAppBar);





