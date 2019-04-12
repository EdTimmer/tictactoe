import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    border: "0.5rem solid #aead0d",
    width: "10rem",
    height: "4rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    borderRadius: "2rem",
    color: "white",
    // background: "white"
  }
})

const Buttons = ({ makeEasy, makeHard, scary, reset, classes }) => {

  return (

    <Fragment>
      <Button variant="outlined" className={classes.button} color="primary">EASY</Button>
      <div className="button" onClick={makeEasy}>EASY</div>
      <div className="button" onClick={makeHard}>HARD</div>          
      <div className="button" onClick={scary}>SCARY</div>
      <div className="button" onClick={reset}>RESET</div>
    
    </Fragment>         
  );

}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Buttons);
