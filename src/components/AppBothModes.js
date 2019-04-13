import React, { useState, useEffect, useRef } from 'react';
import x from '../images/patrick.png';
import o from '../images/spongebob4.png';
import '../App.css';
import Boxes2 from './Boxes2';
import Buttons from './Buttons';
import ImageModal from './ImageModal';

const AppBothModes = () => {
  const [origBoard, setOrigBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [box0, setBox0] = useState("");
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");
  const [box5, setBox5] = useState("");
  const [box6, setBox6] = useState("");
  const [box7, setBox7] = useState("");
  const [box8, setBox8] = useState("");
  const [finishGame, setFinishGame] = useState(false);
  const [easyMode, setEasyMode] = useState(true);
  const [modalOpacity, setModalOpacity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("I Am Ready!");
  
  const huPlayer = x;
  const aiPlayer = o;
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];
  const settersObj = {
    0: setBox0,
    1: setBox1,
    2: setBox2,
    3: setBox3,
    4: setBox4,
    5: setBox5,
    6: setBox6,
    7: setBox7,
    8: setBox8,
  };
  
  let signs = {
    box0: box0,
    box1: box1,
    box2: box2,
    box3: box3,
    box4: box4,
    box5: box5,
    box6: box6,
    box7: box7,
    box8: box8,
  };

  const timer = m => new Promise(r => setTimeout(r, m));

  const reset = () => {
    setBox0("");
    setBox1("");
    setBox2("");
    setBox3("");
    setBox4("");
    setBox5("");
    setBox6("");
    setBox7("");
    setBox8("");
    setMessage("I Am Ready!");
    setModalOpacity(0);
    setModalOpen(false);
    setOrigBoard([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setFinishGame(false);
    setEasyMode(true);
  }

  const turnClick = (square) => {
    if (!finishGame && typeof origBoard[square] == 'number') {
      turn(square, huPlayer)
      if (!easyMode && !checkWin(origBoard, huPlayer) && !checkTie()) {  
        (async () => {
          await timer(500)
          .then(() => turn(bestSpot(), aiPlayer));
        })();
        // turn(bestSpot(), aiPlayer);
      } 
      else if (easyMode && !checkWin(origBoard, huPlayer) && !checkTie()) {
        let filtered = emptySquares();

        let newIndex = getRandomInt(0, filtered.length - 1);
        let newSpot = filtered[newIndex];
        
        (async () => {
          await timer(500)
          .then(() => turn(newSpot, aiPlayer));
        })();

      }
    }
    
  }
  
  const turn = (square, player) => {
    origBoard[square] = player;
    settersObj[square](player);    
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
  }

  const checkWin = (board, player) => {
    let plays = board.reduce((a, e, i) =>
      (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
      if (win.every(elem => plays.indexOf(elem) > -1)) {
        gameWon = {index: index, player: player};
        break;
      }
    }
    return gameWon;
  }
  
  const gameOver = (gameWon) => {
    setFinishGame(true);    
    gameWon.player === huPlayer ? setMessage("You Win!") : setMessage("You lose.");
    
  }

  const emptySquares = () => {
    return origBoard.filter(s => typeof s == 'number');
  }
  
  const bestSpot = () => {
    return minimax(origBoard, aiPlayer).index;
  }
  
  function checkTie() {
    if (emptySquares().length === 0) {
      setMessage("Tie Game!")
      // declareWinner("Tie Game!")
      return true;
    }
    return false;
  }

  function minimax(newBoard, player) {
    var availSpots = emptySquares();
  
    if (checkWin(newBoard, huPlayer)) {
      return {score: -10};
    } else if (checkWin(newBoard, aiPlayer)) {
      return {score: 10};
    } else if (availSpots.length === 0) {
      return {score: 0};
    }
    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
      var move = {};
      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;
  
      if (player === aiPlayer) {
        var result = minimax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        var result = minimax(newBoard, aiPlayer);
        move.score = result.score;
      }
  
      newBoard[availSpots[i]] = move.index;
  
      moves.push(move);
    }
  
    var bestMove;
    if(player === aiPlayer) {
      var bestScore = -10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  
    return moves[bestMove];
  }

  const makeEasy = () => {
    setEasyMode(true);
  }

  const makeHard = () => {
    setEasyMode(false);
  }  


  const scary = () => {
    handleOpen();

    const timer = m => new Promise(r => setTimeout(r, m));

    (async () => {
      setModalOpacity(0);
      await timer(500)
      .then(() => setModalOpacity(1));

      await timer(2000)
        .then(() => setModalOpacity(0));

      await timer(1000)
        .then(() => handleClose());
    })();
  }

  const handleOpen = () => {
    setModalOpen(true);
    setModalOpacity(1);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (

    <div className="App">

      <div className="main-left">

          <div className="logo">
            <img src="https://fontmeme.com/permalink/190331/c4c4ee7256af7dbd791ebccdc22e3ff1.png" alt="logo2"/>
          </div>         
        
          <Boxes2 signs={signs} turnClick={turnClick} />

      </div>

      <div className="main-right">

        <div className="right-grid-container">

        <div className="right-top">
          <div style={{width: "30rem"}}>
            <div className="message">{message}</div>            
          </div>         
        </div>        

        <div className="right-bottom">
          <Buttons easyMode={easyMode} setEasyMode={setEasyMode} makeEasy={makeEasy} makeHard={makeHard} scary={scary} reset={reset} />
        </div>
        <ImageModal modalOpen={modalOpen} handleOpen={handleOpen} handleClose={handleClose} modalOpacity={modalOpacity} />
        </div>      

      </div>

    </div>
  );

}

export default AppBothModes;
