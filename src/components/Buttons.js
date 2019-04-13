import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
    margin: "2rem",
    border: "0.5rem solid #aead0d",
    width: "10rem",
    height: "4rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    borderRadius: "2rem",
    color: "white",
    background: "blue"
  },

})

const Buttons = ({ easyMode, setEasyMode, makeEasy, makeHard, scary, reset, classes,  }) => {

  let selectedEasy = easyMode === true ? "red" : "#aead0d";
  let selectedHard = easyMode === true ?  "#aead0d" : "red";
  return (

    <Fragment>
    
      <Button variant="outlined" className={classes.button} color="primary" onClick={makeEasy} style={{borderColor: selectedEasy}}>EASY</Button>
      <Button variant="outlined" className={classes.button} color="primary" onClick={makeHard} style={{borderColor: selectedHard}}>HARD</Button>

      <Button variant="outlined" className={classes.button} color="primary" onClick={scary}>SCARY</Button>
      <Button variant="outlined" className={classes.button} color="primary" onClick={reset}>RESET</Button>
    
    </Fragment>         
  );

}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Buttons);
