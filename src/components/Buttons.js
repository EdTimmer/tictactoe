import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';

const styles = theme => ({
  button: {
    margin: "2rem",
    border: "0.5rem solid #aead0d",
    width: "10rem",
    height: "4.3rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    borderRadius: "2rem",
    color: "yellow",
    background: "blue"
  },

})

const Buttons = ({ easyMode, setEasyMode, makeEasy, makeHard, scary, reset, classes,  }) => {

  let selectedEasy = easyMode === true ? "red" : "#aead0d";
  let selectedHard = easyMode === true ?  "#aead0d" : "red";
  return (

    <Fragment>

      <Button variant="contained" className={classes.button} color="primary" onClick={makeEasy} style={{borderColor: selectedEasy}}>EASY</Button>
      <Button variant="contained" className={classes.button} color="primary" onClick={makeHard} style={{borderColor: selectedHard}}>HARD</Button>

      <Button variant="contained" className={classes.button} color="primary" onClick={scary}>SCARY</Button>
      <Button variant="contained" className={classes.button} color="primary" onClick={reset}>RESET</Button>
    
    </Fragment>         
  );

}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Buttons);
