import React, { useState } from 'react';
import x from '../images/patrick.png';
import o from '../images/spongebob4.png';
import '../App.css';
import Squares from './Squares';
import Buttons from './Buttons';
import ImageModal from './ImageModal';

const App = () => {
  const [origBoard, setOrigBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [square0, setSquare0] = useState("");
  const [square1, setSquare1] = useState("");
  const [square2, setSquare2] = useState("");
  const [square3, setSquare3] = useState("");
  const [square4, setSquare4] = useState("");
  const [square5, setSquare5] = useState("");
  const [square6, setSquare6] = useState("");
  const [square7, setSquare7] = useState("");
  const [square8, setSquare8] = useState("");
  const [finishGame, setFinishGame] = useState(false);
  const [easyMode, setEasyMode] = useState(true);
  const [modalOpacity, setModalOpacity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const [message, setMessage] = useState("Game On!");
  const [allBackgrounds, setAllBackgrounds] = useState({
    0: "transparent",
    1: "transparent",
    2: "transparent",
    3: "transparent",
    4: "transparent",
    5: "transparent",
    6: "transparent",
    7: "transparent",
    8: "transparent",
  });
  
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
    0: setSquare0,
    1: setSquare1,
    2: setSquare2,
    3: setSquare3,
    4: setSquare4,
    5: setSquare5,
    6: setSquare6,
    7: setSquare7,
    8: setSquare8,
  };
  
  let allSquares = {
    square0: square0,
    square1: square1,
    square2: square2,
    square3: square3,
    square4: square4,
    square5: square5,
    square6: square6,
    square7: square7,
    square8: square8,
  };

  const timer = m => new Promise(r => setTimeout(r, m));

  const reset = () => {
    setSquare0("");
    setSquare1("");
    setSquare2("");
    setSquare3("");
    setSquare4("");
    setSquare5("");
    setSquare6("");
    setSquare7("");
    setSquare8("");
    setMessage("Game On!");
    setModalOpacity(0);
    setModalOpen(false);
    setImageNumber(0);
    setOrigBoard([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setFinishGame(false);
    setEasyMode(true);
    setAllBackgrounds({
      0: "transparent",
      1: "transparent",
      2: "transparent",
      3: "transparent",
      4: "transparent",
      5: "transparent",
      6: "transparent",
      7: "transparent",
      8: "transparent",
    })
  }

  const turnClick = (square) => {
    if (!finishGame && typeof origBoard[square] == 'number') {
      turn(square, huPlayer)
      if (!easyMode && !checkWin(origBoard, huPlayer) && !checkTie()) {  
        (async () => {
          await timer(500)
          .then(() => turn(bestSpot(), aiPlayer));
        })();        
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
    let newObject = Object.assign({}, allBackgrounds)
    for (let index of winCombos[gameWon.index]) {
      gameWon.player === huPlayer ? newObject[index] = "yellow" : newObject[index] = "green"
      setAllBackgrounds(newObject)
    }
    setFinishGame(true);    
    gameWon.player === huPlayer ? setMessage("You Win!") : setMessage("You lose :(");
    
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
      let newObject = Object.assign({}, allBackgrounds);
      for (let i = 0; i < 9; i++) {
        newObject[i] = "blue";
      }
      setAllBackgrounds(newObject);
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
    reset();
    setEasyMode(true);
  }

  const makeHard = () => {
    reset();
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
    changeImage();
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

  const changeImage = () => {
    if (imageNumber < 2) {
      setImageNumber(imageNumber + 1);
    }
    else {
      setImageNumber(0)
    }
  }

  return (

    <div className="App">

      <div className="main-left">

          <div className="logo">
            <img src="https://fontmeme.com/permalink/190331/c4c4ee7256af7dbd791ebccdc22e3ff1.png" alt="logo2"/>
          </div>         
        
          <Squares allSquares={allSquares} allBackgrounds={allBackgrounds} turnClick={turnClick} />

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
        <ImageModal modalOpen={modalOpen} handleOpen={handleOpen} handleClose={handleClose} modalOpacity={modalOpacity} imageNumber={imageNumber}/>
        </div>      

      </div>

    </div>
  );

}

export default App;
