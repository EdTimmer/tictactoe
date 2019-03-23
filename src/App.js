import React, { useState } from 'react';
import x from './images/x.png';
import o from './images/o.png';

import './App.css';

let availableIndArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

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

  let message = "";
  let endGame = false;

  let arr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];

  const removeBox = (n) => {
    availableIndArr.splice(n-1, 1, "taken");

    let newArr = [];
    for (let i = 0; i < availableIndArr.length; i++) {
      if (availableIndArr[i] !== "taken") {
        newArr.push(arr[availableIndArr[i]]);
      }      
    } 
   
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomNumber = getRandomInt(0, newArr.length - 1);
    const changeRandomBox = newArr[randomNumber];

    for (let i = 0; i < availableIndArr.length; i++) {
      if (changeRandomBox === arr[i]) {
        availableIndArr.splice(i, 1, "taken");
      }
    }

    if (newArr.length < 1) {
      endGame = true;
    }

    console.log(availableIndArr);
    return changeRandomBox;

  }

  const mark = (n) => {

    const boxSignArr = [box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign];
    const selectedBox = boxSignArr[n - 1];
    
    const setBoxSignArr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];
    const signFunc = setBoxSignArr[n-1];
    
    
    if (selectedBox === "") {    
      signFunc(x);
      let myFunc = removeBox(n);
      
      if (!endGame) {
        myFunc(o);
      }
    }
  }

  const reset = () => {
    availableIndArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
  }

  //horizontal win
  if (box1Sign !== "" && box1Sign === box2Sign && box2Sign === box3Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box4Sign !== "" && box4Sign === box5Sign && box5Sign === box6Sign) {
    message = box4Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box7Sign !== "" && box7Sign === box8Sign && box8Sign === box9Sign) {
    message = box7Sign === x ? "X Wins!" : "O Wins!";;
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  //vertical win
  if (box1Sign !== "" && box1Sign === box4Sign && box4Sign === box7Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box2Sign !== "" && box2Sign === box5Sign && box5Sign === box8Sign) {
    message = box2Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box3Sign !== "" && box3Sign === box6Sign && box6Sign === box9Sign) {
    message = box3Sign === x ? "X Wins!" : "O Wins!";
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  //diagonal win
  if (box1Sign !== "" && box1Sign === box5Sign && box5Sign === box9Sign) {
    message = box1Sign === x ? "X Wins!" : "O Wins!";    
    document.getElementById('boxes').style.pointerEvents = 'none';
  }
  if (box3Sign !== "" && box3Sign === box5Sign && box5Sign === box7Sign) {
    message = box3Sign === x ? "X Wins!" : "O Wins!";    
    document.getElementById('boxes').style.pointerEvents = 'none';
  }

  // if (box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "") {
  //   message = "Draw!";    
  // }

  return (
    <div className="App">

      <div id="boxes" className="grid-container">

        <div className="grid-item box1" onClick={() => mark(1)}>        
          {
            box1Sign ? <img src={box1Sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box2" onClick={() => mark(2)}>
          {
            box2Sign ? <img src={box2Sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box3" onClick={() => mark(3)}>
          {
            box3Sign ? <img src={box3Sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box4" onClick={() => mark(4)}>
          {
            box4Sign ? <img src={box4Sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box5" onClick={() => mark(5)}>
          {
            box5Sign ? <img src={box5Sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box6" onClick={() => mark(6)}>
          {
            box6Sign ? <img src={box6Sign} className="image" alt="sign" /> : null
          }        
        </div>

        <div className="grid-item box7" onClick={() => mark(7)}>
          {
            box7Sign ? <img src={box7Sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box8" onClick={() => mark(8)}>
          {
            box8Sign ? <img src={box8Sign} className="image" alt="sign" /> : null
          }        
        </div>
        <div className="grid-item box9" onClick={() => mark(9)}>
          {
            box9Sign ? <img src={box9Sign} className="image" alt="sign" /> : null
          }        
        </div>        
      
      </div>

      <div className="message">{message}</div>

      <button onClick={reset}>RESET</button>

    </div>
  );

}

export default App;
