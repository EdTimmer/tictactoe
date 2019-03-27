/*
import React from 'react';
import x from './images/x.png';
import o from './images/o.png';

import './App.css';

let availableIndArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let endGame = false;
let num = 0;
// let myFunc;

class AppClass extends React.Component {
  state = {
    box1Sign: "",
    box2Sign: "",
    box3Sign: "",
    box4Sign: "",
    box5Sign: "",
    box6Sign: "",
    box7Sign: "",
    box8Sign: "",
    box9Sign: "",
    availableIndArr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    endGame: false,
    num: 0,
    oShouldMove: false,
    message: ""
  }

  removeBox = (n, sign) => {

    const setBox1Sign = () => {
      this.setState({box1Sign: sign})
    }

    let arr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];


    this.setState({availableIndArr: availableIndArr.splice(n-1, 1, "taken")});

    let newArr = [];
    for (let i = 0; i < this.availableIndArr.length; i++) {
      if (this.availableIndArr[i] !== "taken") {
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
      // setEndGame(true);
      endGame = true;      
    }

    return changeRandomBox;

  }



} 


 

  let arr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];

  

  const xMove = (n) => {

    const boxSignArr = [box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign];

    const selectedBox = boxSignArr[n - 1];
    
    const setBoxSignArr = [setBox1Sign, setBox2Sign, setBox3Sign, setBox4Sign, setBox5Sign, setBox6Sign, setBox7Sign, setBox8Sign, setBox9Sign];

    const markBox = setBoxSignArr[n-1];
    
    
    if (selectedBox === "") {    
      num = n;
      markBox(x);
      setOShouldMove(true);
    }

    // checkForWin();

  }

  const reset = () => {
    availableIndArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    document.getElementById('boxes').style.pointerEvents = 'auto';
    num = 0;
    endGame = false;
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
    // setEndGame(false);
    setMessage("");
  }

  // if (box1Sign !== "" && box1Sign === box2Sign && box2Sign === box3Sign) {
  //   message = box1Sign === x ? "X Wins!" : "O Wins!";
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }
  // if (box4Sign !== "" && box4Sign === box5Sign && box5Sign === box6Sign) {
  //   message = box4Sign === x ? "X Wins!" : "O Wins!";
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }
  // if (box7Sign !== "" && box7Sign === box8Sign && box8Sign === box9Sign) {
  //   message = box7Sign === x ? "X Wins!" : "O Wins!";;
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }

  // //vertical win
  // if (box1Sign !== "" && box1Sign === box4Sign && box4Sign === box7Sign) {
  //   message = box1Sign === x ? "X Wins!" : "O Wins!";
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }
  // if (box2Sign !== "" && box2Sign === box5Sign && box5Sign === box8Sign) {
  //   message = box2Sign === x ? "X Wins!" : "O Wins!";
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }
  // if (box3Sign !== "" && box3Sign === box6Sign && box6Sign === box9Sign) {
  //   message = box3Sign === x ? "X Wins!" : "O Wins!";
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }

  // //diagonal win
  // if (box1Sign !== "" && box1Sign === box5Sign && box5Sign === box9Sign) {
  //   message = box1Sign === x ? "X Wins!" : "O Wins!";    
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }
  // if (box3Sign !== "" && box3Sign === box5Sign && box5Sign === box7Sign) {
  //   message = box3Sign === x ? "X Wins!" : "O Wins!";    
  //   document.getElementById('boxes').style.pointerEvents = 'none';
  // }

  // //draw
  // if (box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "" && message !== "X Wins!" && message !== "O Wins!") {
  //   message = "Draw!";    
  // }

  const checkForWin = () => {
    if (box1Sign !== "" && box1Sign === box2Sign && box2Sign === box3Sign) {

      if (box1Sign === x) {
        setMessage("X Wins!")
      }
      else if (box1Sign === o) {
        setMessage("O Wins!")
      }        
      // box1Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
    if (box4Sign !== "" && box4Sign === box5Sign && box5Sign === box6Sign) {
      // box4Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      if (box4Sign === x) {
        setMessage("X Wins!")
      }
      else if (box4Sign === o) {
        setMessage("O Wins!")
      }   

      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
    if (box7Sign !== "" && box7Sign === box8Sign && box8Sign === box9Sign) {
      // box7Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      if (box7Sign === x) {
        setMessage("X Wins!")
      }
      else if (box7Sign === o) {
        setMessage("O Wins!")
      }   

      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
  
    //vertical win
    if (box1Sign !== "" && box1Sign === box4Sign && box4Sign === box7Sign) {
      // box1Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      if (box1Sign === x) {
        setMessage("X Wins!")
      }
      else if (box1Sign === o) {
        setMessage("O Wins!")
      }   

      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
    if (box2Sign !== "" && box2Sign === box5Sign && box5Sign === box8Sign) {
      // box2Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      if (box2Sign === x) {
        setMessage("X Wins!")
      }
      else if (box2Sign === o) {
        setMessage("O Wins!")
      }   

      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
    if (box3Sign !== "" && box3Sign === box6Sign && box6Sign === box9Sign) {
      // box3Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");
      if (box3Sign === x) {
        setMessage("X Wins!")
      }
      else if (box3Sign === o) {
        setMessage("O Wins!")
      }   

      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
  
    //diagonal win
    if (box1Sign !== "" && box1Sign === box5Sign && box5Sign === box9Sign) {
      // box1Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");

      if (box1Sign === x) {
        setMessage("X Wins!")
      }
      else if (box1Sign === o) {
        setMessage("O Wins!")
      }   
      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
    if (box3Sign !== "" && box3Sign === box5Sign && box5Sign === box7Sign) {
      // box3Sign === x ? setMessage("X Wins!") : setMessage("O Wins!");

      if (box3Sign === x) {
        setMessage("X Wins!")
      }
      else if (box3Sign === o) {
        setMessage("O Wins!")
      }   
      document.getElementById('boxes').style.pointerEvents = 'none';
      endGame = true;
      // setEndGame(true);
    }
  
    //draw
    else if (box1Sign !== "" && box2Sign !== "" && box3Sign !== "" && box4Sign !== "" && box5Sign !== "" && box6Sign !== "" && box7Sign !== "" && box8Sign !== "" && box9Sign !== "" && message.length === 0) {
      setMessage("Draw!"); 
      endGame = true;
      // setEndGame(true);
    }
  }

  useEffect(() => {
    // console.log('endGame on top of useEffect: ', endGame);
    // console.log('oShouldMove on top of useEffect: ', oShouldMove);
    if (oShouldMove) {  //oShouldMove
      let myFunc = removeBox(num);

      checkForWin();
  
      if (!endGame) {
          
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
          await timer(500)
          .then(() => myFunc(o));
        })();
        setOShouldMove(false);
        
      }
      checkForWin();
    }    
    console.log('message is: ', message);
  })

  // console.log('newMessage is: ', newMessage);
  // checkForWin();
  
  

  return (
    <div className="App">

      <div className="title">Tic Tac Toe!</div>

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

      <button className="reset-button" onClick={reset}>RESET</button>

    </div>
  );

}

export default AppClass;

*/
