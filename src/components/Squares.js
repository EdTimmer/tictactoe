import React from 'react';
import '../App.css';

const Squares = ({ turnClick, allSquares }) => {

  const {square0, square1, square2, square3, square4, square5, square6, square7, square8} = allSquares;   

  // console.log('endGame2 in squarees is: ', endGame2);

  return (

    <div className="grid-container">

      <div className="grid-item square0" onClick={() => turnClick(0)}>        
        {
          square0 ? <img src={square0} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square1" onClick={() => turnClick(1)}>
        {
          square1 ? <img src={square1} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square2" onClick={() => turnClick(2)}>
        {
          square2 ? <img src={square2} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square3" onClick={() => turnClick(3)}>
        {
          square3 ? <img src={square3} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square4" onClick={() => turnClick(4)}>
        {
          square4 ? <img src={square4} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square5" onClick={() => turnClick(5)}>
        {
          square5 ? <img src={square5} className="image" alt="sign" /> : null
        }        
      </div>

      <div className="grid-item square6" onClick={() => turnClick(6)}>
        {
          square6 ? <img src={square6} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square7" onClick={() => turnClick(7)}>
        {
          square7 ? <img src={square7} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item square8" onClick={() => turnClick(8)}>
        {
          square8 ? <img src={square8} className="image" alt="sign" /> : null
        }        
      </div>        
    
    </div>         
  );

}

export default Squares;
