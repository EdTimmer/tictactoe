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
  
  const huPlayer = 'O';
  const aiPlayer = 'X';
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


  let xMove = (num) => {
    console.log(num);
  }

  const turnClick = (square) => {
    if (typeof origBoard[square] == 'number') {
      turn(square, huPlayer)
      if (!checkWin(origBoard, huPlayer) && !checkTie()) {
        turn(bestSpot(), aiPlayer);
      } 
    }
  }

  
  function turn(square, player) {
    origBoard[square] = player;
    settersObj[square](player);
    
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
  }
  
  return (
    <div className="grid-container">

      <div className="grid-item box1" onClick={() => xMove(0)}>        
        {box0}
      </div>

      <div className="grid-item box2" onClick={() => xMove(1)}>        
        {box1}  
      </div>

      <div className="grid-item box3" onClick={() => xMove(2)}>
        {box2}     
      </div>

      <div className="grid-item box4" onClick={() => xMove(3)}>
        {box3}
      </div>

      <div className="grid-item box5" onClick={() => xMove(4)}>
        {box4}  
      </div>

      <div className="grid-item box6" onClick={() => xMove(5)}>
        {box5}  
      </div>

      <div className="grid-item box7" onClick={() => xMove(6)}>
        {box6}
      </div>

      <div className="grid-item box8" onClick={() => xMove(7)}>
        {box7}
      </div>
      <div className="grid-item box9" onClick={() => xMove(8)}>
        {box8}
      </div>
   
    
    </div>         
  )

}

export default Unbeatable;

