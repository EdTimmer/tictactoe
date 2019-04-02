import React, { useState, useEffect, useRef } from 'react';
// import x from '../images/x.png';
import x from '../images/patrick.png';
// import o from '../images/o.png';
import o from '../images/spongebob4.png';
// import patrick from '../images/patrick.png';
// import spongebob from '../images/spongebob2.png';
// import logo from '../images/logo.png';
import '../App.css';
import Boxes from './Boxes.js';

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
  const [message, setMessage] = useState("I Am Ready!");
  const [endGame2, setEndGame2] = useState(false);

  // let refValue = useRef(endGame);
  // console.log(refValue);

  let endGame = false;
  // let message = "I Am Ready!";  
  let signs = {
    box1Sign: box1Sign,
    box2Sign: box2Sign,
    box3Sign: box3Sign,
    box4Sign: box4Sign,
    box5Sign: box5Sign,
    box6Sign: box6Sign,
    box7Sign: box7Sign,
    box8Sign: box8Sign,
    box9Sign: box9Sign
  }

  // useEffect(() => {
  //   refValue.current = endGame;
  // }, [endGame])

  const xMove = (n) => {   
    if (!endGame) {
      // console.log('x move fired');
      if (settersObj[n]) { 
           
        settersObj[n](x);

        let newObj = Object.assign({}, settersObj);
        delete newObj[n];
        setSettersObj(newObj)
  
        setOShouldMove(true);
        
        checkForWin();
      }
    }     
  }

  const reset = () => {
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
    setMessage("I Am Ready!");
    setEndGame2(false);
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
    endGame = false;
  }


  useEffect(() => {    

    checkForWin()
    // console.log('refValue after first checkForWin is: ', refValue.current);
    if (oShouldMove && !endGame) {
      // console.log('o move fired')
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
        // setEndGame(true);
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
      checkForWin();
    }    
    
  }, [box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign])

const checkForWin = () => {
  // console.log('checkForWin run!');
    //horizontal win  
    if (box1Sign !== "" && box1Sign === box2Sign && box2Sign === box3Sign) {
      
      setMessage(box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }
    if (box4Sign !== "" && box4Sign === box5Sign && box5Sign === box6Sign) {
      // let message = box4Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      setMessage(box4Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }
    if (box7Sign !== "" && box7Sign === box8Sign && box8Sign === box9Sign) {
      // let message = box7Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      setMessage(box7Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }

    //vertical win
    if (box1Sign !== "" && box1Sign === box4Sign && box4Sign === box7Sign) {
      // message = box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      setMessage(box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }
    if (box2Sign !== "" && box2Sign === box5Sign && box5Sign === box8Sign) {
      // message = box2Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      setMessage(box2Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }
    if (box3Sign !== "" && box3Sign === box6Sign && box6Sign === box9Sign) {
      // message = box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      setMessage(box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }

    //diagonal win
    if (box1Sign !== "" && box1Sign === box5Sign && box5Sign === box9Sign) {
      // message = box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!";  
      setMessage(box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!");  
      endGame = true;
      // setEndGame(true);
    }
    if (box3Sign !== "" && box3Sign === box5Sign && box5Sign === box7Sign) {
      // message = box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!";    
      setMessage(box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!");
      endGame = true;
      // setEndGame(true);
    }

    //draw
    if (!endGame && box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "") {
      // message = "Draw!";
      setMessage("Draw!");
      endGame = true;
      // setEndGame(true);
    }
  } 

  // console.log("endGame before last if is: ", endGame);

  // useEffect(() => {
  //   if (message !== "I Am Ready!") {
  //     setEndGame2(true);
  //   }
  // }, [message])
  if (message !== "I Am Ready!") {
    endGame = true;
  }

  // console.log("endGame after last if is: ", endGame);
  

  return (

    <div className="App">

      <div className="main-left">

          <div className="logo">
            <img src="https://fontmeme.com/permalink/190331/c4c4ee7256af7dbd791ebccdc22e3ff1.png" alt="logo2"/>
          </div>         
        
          <Boxes signs={signs} xMove={xMove} />

      </div>

      <div className="main-right">

        <div className="right-grid-container">

        <div className="right-top">
          <div style={{width: "30rem"}}>
            <div className="message">{message}</div>
            {/*<div style={{fontSize: "2rem", paddingTop: "1rem"}}>{message2}</div>*/} 
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
