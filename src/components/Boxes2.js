import React from 'react';
import '../App.css';

const Boxes2 = ({ turnClick, signs }) => {

  const {box0, box1, box2, box3, box4, box5, box6, box7, box8} = signs;   

  // console.log('endGame2 in Boxes is: ', endGame2);

  return (

    <div className="grid-container">

      <div className="grid-item box1" onClick={() => turnClick(0)}>        
        {
          box0 ? <img src={box0} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box2" onClick={() => turnClick(1)}>
        {
          box1 ? <img src={box1} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box3" onClick={() => turnClick(2)}>
        {
          box2 ? <img src={box2} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box4" onClick={() => turnClick(3)}>
        {
          box3 ? <img src={box3} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box5" onClick={() => turnClick(4)}>
        {
          box4 ? <img src={box4} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box6" onClick={() => turnClick(5)}>
        {
          box5 ? <img src={box5} className="image" alt="sign" /> : null
        }        
      </div>

      <div className="grid-item box7" onClick={() => turnClick(6)}>
        {
          box6 ? <img src={box6} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box8" onClick={() => turnClick(7)}>
        {
          box7 ? <img src={box7} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box9" onClick={() => turnClick(8)}>
        {
          box8 ? <img src={box8} className="image" alt="sign" /> : null
        }        
      </div>        
    
    </div>         
  );

}

export default Boxes2;
