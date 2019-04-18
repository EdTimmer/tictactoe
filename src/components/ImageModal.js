import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import img1 from '../images/fly1.png';
import img2 from '../images/fly2.png';
import img3 from '../images/fly3.png';

const styles = theme => ({
  paper: {
    // position: 'absolute',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "auto",
    width: "60rem",
    boxShadow: theme.shadows[5],
    outline: 'none',
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    transition: 'opacity 1s ease-in-out'
  },
});


const Image = ({modalOpen, handleClose, modalOpacity, classes, imageNumber}) => {

  const images = [img2, img1, img3];

  return (
    <div>     

      <Modal
        open={modalOpen}
        onClose={handleClose}   
        style={{transition: 'all 0.5s ease-in-out', opacity: modalOpacity}}
      >
        
          <div style={{opacity: modalOpacity}} className={classes.paper}>          
            <img src={images[imageNumber]} style={{ maxHeight: '80vh', minHeight: '80vh', maxWidth: '80rem'}} alt="scary" />
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
