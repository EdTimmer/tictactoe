import React, { useState, useEffect, useRef } from 'react';
import x from '../images/patrick.png';
import o from '../images/spongebob4.png';
import '../App.css';
// import Boxes from './Boxes.js';
// import ImageModal from './ImageModal';

const Unbeatable = () => {
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
  
  const huPlayer = 'X';
  const aiPlayer = 'O';
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
  let endGame = false;

  const turnClick = (square) => {
    // console.log('endGame in turnClick is: ', endGame);
    console.log('origBoard is: ', origBoard)
    if (!finishGame && typeof origBoard[square] == 'number') {
      turn(square, huPlayer)
      if (!easyMode && !checkWin(origBoard, huPlayer) && !checkTie()) {  //insert here logic for easy/hard mode
        turn(bestSpot(), aiPlayer);
      } 
      else if (easyMode && !checkWin(origBoard, huPlayer) && !checkTie()) {
        console.log('now in easy mode')
        let filtered = emptySquares();
        console.log('filtered is: ', filtered)

        const getRandomInt = (min, max) => {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let newIndex = getRandomInt(0, filtered.length - 1);
        let newSpot = filtered[newIndex];
        console.log('newSpot is: ', newSpot)

        turn(newSpot, aiPlayer);

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
    // endGame = true;
    return gameWon;
  }
  
  const gameOver = (gameWon) => {
    setFinishGame(true);
    console.log('gameWon is: ', gameWon);
    console.log('endGame is: ', endGame);    
    
  }

  const emptySquares = () => {
    return origBoard.filter(s => typeof s == 'number');
  }
  
  const bestSpot = () => {
    // console.log('minimax result dot index: ', minimax(origBoard, aiPlayer));
    return minimax(origBoard, aiPlayer).index;
  }
  
  function checkTie() {
    if (emptySquares().length === 0) {
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
  
  return (
    <div className="grid-container">

      <div className="grid-item box1" onClick={() => turnClick(0)}>        
        {box0}
      </div>

      <div className="grid-item box2" onClick={() => turnClick(1)}>        
        {box1}  
      </div>

      <div className="grid-item box3" onClick={() => turnClick(2)}>
        {box2}     
      </div>

      <div className="grid-item box4" onClick={() => turnClick(3)}>
        {box3}
      </div>

      <div className="grid-item box5" onClick={() => turnClick(4)}>
        {box4}  
      </div>

      <div className="grid-item box6" onClick={() => turnClick(5)}>
        {box5}  
      </div>

      <div className="grid-item box7" onClick={() => turnClick(6)}>
        {box6}
      </div>

      <div className="grid-item box8" onClick={() => turnClick(7)}>
        {box7}
      </div>
      <div className="grid-item box9" onClick={() => turnClick(8)}>
        {box8}
      </div>
   
      <button onClick={makeEasy}>Easy</button>
      <button onClick={makeHard}>Hard</button>
    
    </div>         
  )

}

export default Unbeatable;

