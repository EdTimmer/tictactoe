import React, { useState } from 'react';
import x from './images/x.png';
import o from './images/o.png';

import './App.css';

const App = () => {
  const [box1sign, setBox1sign] = useState("");
  const [box2sign, setBox2sign] = useState("");
  const [box3sign, setBox3sign] = useState("");
  const [box4sign, setBox4sign] = useState("");
  const [box5sign, setBox5sign] = useState("");
  const [box6sign, setBox6sign] = useState("");
  const [box7sign, setBox7sign] = useState("");
  const [box8sign, setBox8sign] = useState("");
  const [box9sign, setBox9sign] = useState("");

  const [box1HasMove, setBox1HasMove] = useState(true);
  const [box2HasMove, setBox2HasMove] = useState(true);
  const [box3HasMove, setBox3HasMove] = useState(true);
  const [box4HasMove, setBox4HasMove] = useState(true);
  const [box5HasMove, setBox5HasMove] = useState(true);
  const [box6HasMove, setBox6HasMove] = useState(true);
  const [box7HasMove, setBox7HasMove] = useState(true);
  const [box8HasMove, setBox8HasMove] = useState(true);
  const [box9HasMove, setBox9HasMove] = useState(true);

  const [flipSign, setFlipSign] = useState(true);

  // const [gameOver, setGameOver] = useState(false);

  // const [message, setMessage] = useState("");

  let message = "";
  let gameOver = false;

  const mark = (n) => {
    
    const boxesArr = [setBox1sign, setBox2sign, setBox3sign, setBox4sign, setBox5sign, setBox6sign, setBox7sign, setBox8sign, setBox9sign];
    const signFunc = boxesArr[n-1];

    const boxHasMoveArr = [box1HasMove, box2HasMove, box3HasMove, box4HasMove, box5HasMove, box6HasMove, box7HasMove, box8HasMove, box9HasMove];
    const hasMove = boxHasMoveArr[n - 1];

    const changeHasMoveArr = [setBox1HasMove, setBox2HasMove, setBox3HasMove, setBox4HasMove, setBox5HasMove, setBox6HasMove, setBox7HasMove, setBox8HasMove, setBox9HasMove];
    const changeHasMoveFunc = changeHasMoveArr[n - 1];

    
    if (hasMove && flipSign) {      
      signFunc(x);
      changeHasMoveFunc(false);
      setFlipSign(false);
    }

    else if (hasMove && !flipSign) {      
      signFunc(o);
      changeHasMoveFunc(false);
      setFlipSign(true);
    }

    console.log('box1sign is: ', box1sign)

  }

  const reset = () => {
    document.getElementById('boxes').style.pointerEvents = 'auto';
    setBox1sign("");
    setBox2sign("");
    setBox3sign("");
    setBox4sign("");
    setBox5sign("");
    setBox6sign("");
    setBox7sign("");
    setBox8sign("");
    setBox9sign("");
  
    setBox1HasMove(true);
    setBox2HasMove(true);
    setBox3HasMove(true);
    setBox4HasMove(true);
    setBox5HasMove(true);
    setBox6HasMove(true);
    setBox7HasMove(true);
    setBox8HasMove(true);
    setBox9HasMove(true);

    setFlipSign(true);
  }

//horizontal win
  if (box1sign !== "" && box1sign === box2sign && box2sign === box3sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box4sign !== "" && box4sign === box5sign && box5sign === box6sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box7sign !== "" && box7sign === box8sign && box8sign === box9sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  //vertical win
  if (box1sign !== "" && box1sign === box4sign && box4sign === box7sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box2sign !== "" && box2sign === box5sign && box5sign === box8sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box3sign !== "" && box3sign === box6sign && box6sign === box9sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  //diagonal win
  if (box1sign !== "" && box1sign === box5sign && box5sign === box9sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box3sign !== "" && box3sign === box5sign && box5sign === box7sign) {
    message = "Victory!";
    gameOver= true;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  return (
    <div className="App">

      <div id="boxes" className="grid-container">

        <div className="grid-item box1" onClick={() => mark(1)}>        
          {
            box1sign ? <img src={box1sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box2" onClick={() => mark(2)}>
          {
            box2sign ? <img src={box2sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box3" onClick={() => mark(3)}>
          {
            box3sign ? <img src={box3sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box4" onClick={() => mark(4)}>
          {
            box4sign ? <img src={box4sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box5" onClick={() => mark(5)}>
          {
            box5sign ? <img src={box5sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box6" onClick={() => mark(6)}>
          {
            box6sign ? <img src={box6sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box7" onClick={() => mark(7)}>
          {
            box7sign ? <img src={box7sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box8" onClick={() => mark(8)}>
          {
            box8sign ? <img src={box8sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box9" onClick={() => mark(9)}>
          {
            box9sign ? <img src={box9sign} className="image" alt="sign" /> : null
          }        
        </div>        
      
      </div>

      <div className="message">{message}</div>

      <button onClick={reset}>RESET</button>

    </div>
  );

}

export default App;
