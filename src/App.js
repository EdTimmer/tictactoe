import React, { useState, useEffect } from 'react';
import x from './images/x.png';
import o from './images/o.png';
import logo from './images/logo.png';
import './App.css';

const App = () => {
  const [box1Sign, setBox1Sign] = useState("");
  const [box2Sign, setBox2Sign] = useState("");
  const [box3Sign, setBox3Sign] = useState("");
  const [box4Sign, setBox4Sign] = useState("");
  const [box5Sign, setBox5Sign] = useState("");
  const [box6Sign, setBox6Sign] = useState("");
  const [box7Sign, setBox7Sign] = useState("");
  const [box8Sign, setBox8Sign] = useState("");
  const [box9Sign, setBox9Sign] = useState("");
  const [oShouldMove, setOShouldMove] = useState(false);
  const [settersObj, setSettersObj] = useState({
    1: setBox1Sign,
    2: setBox2Sign,
    3: setBox3Sign,
    4: setBox4Sign,
    5: setBox5Sign,
    6: setBox6Sign,
    7: setBox7Sign,
    8: setBox8Sign,
    9: setBox9Sign
  })

  let endGame = false;
  let message = "Game On!";  

  const xMove = (n) => {    
    if (settersObj[n]) {    
      settersObj[n](x);

      let newObj = Object.assign({}, settersObj);
      delete newObj[n];
      setSettersObj(newObj)

      setOShouldMove(true);
    }
  }

  const reset = () => {
    document.getElementById('boxes').style.pointerEvents = 'auto';
    setBox1Sign("");
    setBox2Sign("");
    setBox3Sign("");
    setBox4Sign("");
    setBox5Sign("");
    setBox6Sign("");
    setBox7Sign("");
    setBox8Sign("");
    setBox9Sign("");    
    setOShouldMove(false);
    setSettersObj({
      1: setBox1Sign,
      2: setBox2Sign,
      3: setBox3Sign,
      4: setBox4Sign,
      5: setBox5Sign,
      6: setBox6Sign,
      7: setBox7Sign,
      8: setBox8Sign,
      9: setBox9Sign
    })
  }

  useEffect(() => {

    if (oShouldMove && !endGame) {
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      let keysArr = Object.keys(settersObj);  
      let randomNumber = getRandomInt(0, keysArr.length - 1);  
      let oMoveKey = keysArr[randomNumber];
      let nextOBoxSetter = settersObj[oMoveKey];

      let newObj2 = Object.assign({}, settersObj);
      delete newObj2[oMoveKey];
      setSettersObj(newObj2)
  
      let keysArr2 = Object.keys(settersObj);  
      if (keysArr2.length < 1) {
        endGame = true;      
      }
      else {
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
          await timer(500)
          .then(() => nextOBoxSetter(o));
        })();
        setOShouldMove(false);
      }
    }    
  }, [box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign])

  //horizontal win  
  if (box1Sign !== "" && box1Sign === box2Sign && box2Sign === box3Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }
  if (box4Sign !== "" && box4Sign === box5Sign && box5Sign === box6Sign) {
    message = box4Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }
  if (box7Sign !== "" && box7Sign === box8Sign && box8Sign === box9Sign) {
    message = box7Sign === x ? "X Wins!" : "O Wins!";;
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }

  //vertical win
  if (box1Sign !== "" && box1Sign === box4Sign && box4Sign === box7Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }
  if (box2Sign !== "" && box2Sign === box5Sign && box5Sign === box8Sign) {
    message = box2Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }
  if (box3Sign !== "" && box3Sign === box6Sign && box6Sign === box9Sign) {
    message = box3Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }

  //diagonal win
  if (box1Sign !== "" && box1Sign === box5Sign && box5Sign === box9Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";    
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }
  if (box3Sign !== "" && box3Sign === box5Sign && box5Sign === box7Sign) {
    message = box3Sign === x ? "X Wins!" : "O Wins!";    
    document.getElementById('boxes').style.pointerEvents = 'none';
    endGame = true;
  }

  //draw
  if (box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "" && message === "Game On!") {
    message = "Draw!";
    endGame = true;    
  }
  
  return (

    <div className="App">

      <div className="main-left">

          <div className="logo"><img className="logo-image" src={logo} alt="logo" /></div>

          <div id="boxes" className="grid-container">

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

      </div>

      <div className="main-right">

        <div className="right-grid-container">

        <div className="right-top">
          <div style={{width: "30rem"}}>
            <div className="message">{message}</div>
          </div>          
        </div>

        <div className="right-bottom">
          <div className="reset-button" onClick={reset}>RESET</div>
        </div>

        </div>      

      </div>


    </div>
  );

}

export default App;
