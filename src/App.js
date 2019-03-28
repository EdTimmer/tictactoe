import React, { useState, useEffect } from 'react';
import x from './images/x.png';
import o from './images/o.png';
import logo from './images/logo.png';
import './App.css';
import myGlobalVar from './globalvar';


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
  
  let endGame = false;
  let message = "";  

  let arrOfSetters = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];

  const removeBox = (n) => {
    myGlobalVar.availableIndArr.splice(n-1, 1, "taken");

    let filteredSetters = [];
    for (let i = 0; i < myGlobalVar.availableIndArr.length; i++) {
      if (myGlobalVar.availableIndArr[i] !== "taken") {
        filteredSetters.push(arrOfSetters[myGlobalVar.availableIndArr[i]]);
      }      
    } 
   
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomNumber = getRandomInt(0, filteredSetters.length - 1);
    const nextOBoxSetter = filteredSetters[randomNumber];

    for (let i = 0; i < myGlobalVar.availableIndArr.length; i++) {
      if (nextOBoxSetter === arrOfSetters[i]) {
        myGlobalVar.availableIndArr.splice(i, 1, "taken");
      }
    }

    if (filteredSetters.length < 1) {
      endGame = true;      
    }

    return nextOBoxSetter;
  }

  const xMove = (n) => {

    const boxSignArr = [box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign];

    const selectedBox = boxSignArr[n - 1];
    
    const setBoxSignArr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];

    const markBox = setBoxSignArr[n-1];
    
    
    if (selectedBox === "") {    
      myGlobalVar.num = n;
      markBox(x);
      setOShouldMove(true);
    }
  }

  const reset = () => {
    myGlobalVar.availableIndArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    document.getElementById('boxes').style.pointerEvents = 'auto';
    myGlobalVar.num = 0;
    endGame = false;
    message = "";
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
  }

  useEffect(() => {

    if (oShouldMove && !endGame) {  

      let myFunc = removeBox(myGlobalVar.num);
         
      const timer = m => new Promise(r => setTimeout(r, m));
      (async () => {
        await timer(500)
        .then(() => myFunc(o));
      })();
      setOShouldMove(false);
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
  if (box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "" && message.length === 0) {
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

          <div className="message">{message}</div>

         

      </div>

      <div className="main-right">

        <div className="right-grid-container">

        <div className="right-top">
        
        </div>

        <div className="right-bottom">
          <div className="reset-button" onClick={reset}>RESET</div>
        </div>

        </div>

         {/*} <div className="right-top">
          
          </div>

          <div className="right-bottom">
            
          </div>
        
        </div>
      
        {/*<div className="logo"><img className="logo-image" src={logo} alt="logo" /></div>*/}
        

      </div>


    </div>
  );

}

export default App;
