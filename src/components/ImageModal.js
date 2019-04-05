import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import img1 from '../images/fly1.png';

const styles = theme => ({
  paper: {
    // position: 'absolute',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    marginBottom: "auto",
    // width: theme.spacing.unit * 63,
    width: "60rem",
    // height: "40rem",
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing.unit * 4,
    outline: 'none',
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    transition: 'opacity 1s ease-in-out'
  },
});

const Image = ({modalOpen, handleClose, modalOpacity, classes, imageNumber}) => {

  return (
    <div>     

      <Modal
        open={modalOpen}
        onClose={handleClose}   
        style={{transition: 'all 0.5s ease-in-out', opacity: modalOpacity}}
      >
        
          <div style={{opacity: modalOpacity}} className={classes.paper}>          
            <img src={img1} style={{ width: '55rem' }} alt="scary" />  
          </div>      
        
      </Modal>
    </div>
  );
}


Image.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ImageModal = withStyles(styles)(Image);

export default ImageModal;
