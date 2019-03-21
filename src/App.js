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

  // const [message, setMessage] = useState("");

  let message = "";

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

  }

  if (box1sign === x && box2sign === x && box3sign === x) {
    // setMessage("X Victory!")
    message = "X Victory!";
    // setGameOver
  }
  // if (box4sign === x && box4sign === box5sign && box5sign === box6sign) {
  //   setMessage("X Victory!")
  //   // message = "X Victory!"
  // }
  // if (box7sign === x && box7sign === box8sign && box8sign === box9sign) {
  //   setMessage("X Victory!")
  //   // message = "X Victory!"
  // }

  // console.log(message)


  return (
    <div className="App">

      <div className="grid-container">

        <div className="grid-item box1" onClick={() => mark(1)} disabled={message.length > 1}>        
          {
            box1sign ? <img src={box1sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box2" onClick={() => mark(2)} disabled={message.length > 1}>
          {
            box2sign ? <img src={box2sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box3" onClick={() => mark(3)} disabled={message.length > 1}>
          {
            box3sign ? <img src={box3sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box4" onClick={() => mark(4)} disabled={message.length > 1}>
          {
            box4sign ? <img src={box4sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box5" onClick={() => mark(5)} disabled={message.length > 1}>
          {
            box5sign ? <img src={box5sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box6" onClick={() => mark(6)} disabled={message.length > 1}>
          {
            box6sign ? <img src={box6sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box7" onClick={() => mark(7)} disabled={message.length > 1}>
          {
            box7sign ? <img src={box7sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box8" onClick={() => mark(8)} disabled={message.length > 1}>
          {
            box8sign ? <img src={box8sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box9" onClick={() => mark(9)} disabled={message.length > 1}>
          {
            box9sign ? <img src={box9sign} style={{ height: '5rem', width: '5rem' }} alt="sign" /> : null
          }        
        </div>        
      
      </div>

      <div>{message}</div>

    </div>
  );

}

export default App;
