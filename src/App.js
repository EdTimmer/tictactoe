import React, { useState } from 'react';

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
  const [counter, setCounter] = useState(0);
  const [first, setFirst] = useState(true);


  // let counter = 0;
  const mark = (n) => {
    const boxesArr = [setBox1sign, setBox2sign, setBox3sign, setBox4sign, setBox5sign, setBox6sign, setBox7sign, setBox8sign, setBox9sign];
    let func = boxesArr[n-1];
    if (first) {      
      func("red");
      setFirst(false);
      // setBox1sign("red");
    }
    else {
      func("blue");
      setFirst(true);
      // setBox1sign("blue");
    }
    // setCounter(counter + 1);
  }


  return (
    <div className="App">

      <div className="grid-container">

        <div className="grid-item box1" style={{backgroundColor: box1sign }} onClick={() => mark(1)} />
        <div className="grid-item box2" style={{backgroundColor: box2sign }} onClick={() => mark(2)} />
        <div className="grid-item box3" style={{backgroundColor: box3sign }} onClick={() => mark(3)} />

        <div className="grid-item box4" style={{backgroundColor: box4sign }} onClick={() => mark(4)} />
        <div className="grid-item box5" style={{backgroundColor: box5sign }} onClick={() => mark(5)} />
        <div className="grid-item box6" style={{backgroundColor: box6sign }} onClick={() => mark(6)} />

        <div className="grid-item box7" style={{backgroundColor: box7sign }} onClick={() => mark(7)} />
        <div className="grid-item box8" style={{backgroundColor: box8sign }} onClick={() => mark(8)} />
        <div className="grid-item box9" style={{backgroundColor: box9sign }} onClick={() => mark(9)} />        
      
      </div>

    </div>
  );

}

export default App;
