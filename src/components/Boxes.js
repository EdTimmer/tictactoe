import React from 'react';
import '../App.css';

const Boxes = ({ signs, xMove }) => {

  const {box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign} = signs;   

  console.log('box1Sign is: ', box1Sign);

  return (

    <div className="grid-container">

      <div className="grid-item box1" onClick={() => xMove(1)}>        
        {
          box1Sign ? <img src={box1Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box2" onClick={() => xMove(2)}>
        {
          box2Sign ? <img src={box2Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box3" onClick={() => xMove(3)}>
        {
          box3Sign ? <img src={box3Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box4" onClick={() => xMove(4)}>
        {
          box4Sign ? <img src={box4Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box5" onClick={() => xMove(5)}>
        {
          box5Sign ? <img src={box5Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box6" onClick={() => xMove(6)}>
        {
          box6Sign ? <img src={box6Sign} className="image" alt="sign" /> : null
        }        
      </div>

      <div className="grid-item box7" onClick={() => xMove(7)}>
        {
          box7Sign ? <img src={box7Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box8" onClick={() => xMove(8)}>
        {
          box8Sign ? <img src={box8Sign} className="image" alt="sign" /> : null
        }        
      </div>
      <div className="grid-item box9" onClick={() => xMove(9)}>
        {
          box9Sign ? <img src={box9Sign} className="image" alt="sign" /> : null
        }        
      </div>        
    
    </div>         
  );

}

export default Boxes;
