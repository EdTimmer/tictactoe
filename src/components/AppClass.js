
import React from 'react';
// import x from '../images/x.png';
import x from '../images/patrick.png';
// import o from '../images/o.png';
import o from '../images/spongebob4.png';
// import patrick from '../images/patrick.png';
// import spongebob from '../images/spongebob2.png';
// import logo from '../images/logo.png';
import '../App.css';
import Boxes from './Boxes.js';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box1Sign: "",
      box2Sign: "",
      box3Sign: "",
      box4Sign: "",
      box5Sign: "",
      box6Sign: "",
      box7Sign: "",
      box8Sign: "",
      box9Sign: "",
      oShouldMove: "",
      message: "I Am Ready!",
      gameOver: false,
      // settesObj: {
      //   1: (sign) => this.setState({box1Sign: sign}),
      //   2: (sign) => this.setState({box2Sign: sign}),
      //   3: (sign) => this.setState({box3Sign: sign}),
      //   4: (sign) => this.setState({box4Sign: sign}),
      //   5: (sign) => this.setState({box5Sign: sign}),
      //   6: (sign) => this.setState({box6Sign: sign}),
      //   7: (sign) => this.setState({box7Sign: sign}),
      //   8: (sign) => this.setState({box8Sign: sign}),
      //   9: (sign) => this.setState({box9Sign: sign}),
      // },
      // signs: {
      //   box1Sign: this.box1Sign,
      //   box2Sign: this.box2Sign,
      //   box3Sign: this.box3Sign,
      //   box4Sign: this.box4Sign,
      //   box5Sign: this.box5Sign,
      //   box6Sign: this.box6Sign,
      //   box7Sign: this.box7Sign,
      //   box8Sign: this.box8Sign,
      //   box9Sign: this.box9Sign
      // }   
    }
    this.settersObj = {
      1: (sign) => this.setState({box1Sign: sign}),
      2: (sign) => this.setState({box2Sign: sign}),
      3: (sign) => this.setState({box3Sign: sign}),
      4: (sign) => this.setState({box4Sign: sign}),
      5: (sign) => this.setState({box5Sign: sign}),
      6: (sign) => this.setState({box6Sign: sign}),
      7: (sign) => this.setState({box7Sign: sign}),
      8: (sign) => this.setState({box8Sign: sign}),
      9: (sign) => this.setState({box9Sign: sign}),
    }

    this.endGame2 = false;

    // this.signs = {
    //   box1Sign: this.state.box1Sign,
    //   box2Sign: this.state.box2Sign,
    //   box3Sign: this.state.box3Sign,
    //   box4Sign: this.state.box4Sign,
    //   box5Sign: this.state.box5Sign,
    //   box6Sign: this.state.box6Sign,
    //   box7Sign: this.state.box7Sign,
    //   box8Sign: this.state.box8Sign,
    //   box9Sign: this.state.box9Sign
    // }
  }

  fireSetter = (n, sign) => {
    //this function will (1) fire setter to change sign and (2) delete that setter from the settersObj
    // switch()
  }

  xMove = (n) => {   
    if (!this.state.gameOver) {
      console.log('x move fired');
      // console.log('settersObj: ', this.settersObj)
      if (this.settersObj[n]) { 

        // console.log('setter is: ', this.settersObj[n])
           
        this.settersObj[n](x);
        // console.log('message before setters is called is: ', this.state.message)
        // this.setState({box1Sign: "test"});
        // this.setState({message: "hello!"})
        // console.log('message sfter setter is called is: ', this.state.message)


        // console.log('changed sign is: ', this.state.box1Sign)
        
  
        // let newObj = Object.assign({}, this.settersObj);
        // delete newObj[n];
        // this.setState({settersObj: newObj})
        
        delete this.settersObj[n];
  
        this.setState({oShouldMove: true})
        // .then(()=> this.oMove())
        // return checkForWin();
        this.checkForWin();
        // console.log('gameOver after x move is: ', this.state.gameOver)
        this.oMove();
      }
    }     
  }

  // this.setState((prevState, props) =>({
  //   counter: prevState.counter + props.increment
  // ))}

  oMove = () => {
    this.checkForWin()
    if (!this.state.gameOver) {
      console.log('o move fired')
      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      let keysArr = Object.keys(this.settersObj);  
      let randomNumber = getRandomInt(0, keysArr.length - 1);  
      let oMoveKey = keysArr[randomNumber];
      let nextOBoxSetter = this.settersObj[oMoveKey];

      let newObj2 = Object.assign({}, this.settersObj);
      delete newObj2[oMoveKey];
      this.setState({settersObj: newObj2})
      // setSettersObj(newObj2)
  
      let keysArr2 = Object.keys(this.settersObj);  
      if (keysArr2.length < 1) {
        this.setState({gameOver: true});

      }
      else {
        const timer = m => new Promise(r => setTimeout(r, m));
        (async () => {
          await timer(500)
          .then(() => nextOBoxSetter(o));
        })();
        this.setState({oShouldMove: false});
        
      }
      this.checkForWin();
    }
  }

checkForWin = () => {
  console.log('checkForWin run!');
    //horizontal win  
    if (this.state.box1Sign !== "" && this.state.box1Sign === this.state.box2Sign && this.state.box2Sign === this.state.box3Sign) {
      console.log("hi")
      let newMessage = this.state.box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
      console.log('this.state.gameOver in checkForWin after top row win: ', this.state.gameOver)
      this.endGame2 = true;
      console.log('endGame2 after top row win is: ', this.endGame2)
    }
    if (this.state.box4Sign !== "" && this.state.box4Sign === this.state.box5Sign && this.state.box5Sign === this.state.box6Sign) {
      let newMessage = this.state.box4Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
    }
    if (this.state.box7Sign !== "" && this.state.box7Sign === this.state.box8Sign && this.state.box8Sign === this.state.box9Sign) {
      let newMessage = this.state.box7Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
    }

    //vertical win
    if (this.state.box1Sign !== "" && this.state.box1Sign === this.state.box4Sign && this.state.box4Sign === this.state.box7Sign) {
      let newMessage = this.state.box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
    }
    if (this.state.box2Sign !== "" && this.state.box2Sign === this.state.box5Sign && this.state.box5Sign === this.state.box8Sign) {
      let newMessage = this.state.box2Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
    }
    if (this.state.box3Sign !== "" && this.state.box3Sign === this.state.box6Sign && this.state.box6Sign === this.state.box9Sign) {
      let newMessage = this.state.box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!";
      this.setState({setMessage: newMessage, gameOver: true});
    }

    //diagonal win
    if (this.state.box1Sign !== "" && this.state.box1Sign === this.state.box5Sign && this.state.box5Sign === this.state.box9Sign) {
      let newMessage = this.state.box1Sign === x ? "Patrick Wins!" : "Spongebob Wins!";  
      this.setState({setMessage: newMessage, gameOver: true});
    }
    if (this.state.box3Sign !== "" && this.state.box3Sign === this.state.box5Sign && this.state.box5Sign === this.state.box7Sign) {
      let newMessage = this.state.box3Sign === x ? "Patrick Wins!" : "Spongebob Wins!";    
      this.setState({setMessage: newMessage, gameOver: true});
    }

    //draw
    if (!this.state.gameOver && this.state.box1Sign !== "" && this.state.box2Sign !== "" && this.state.box3Sign !== "" && this.state.box4Sign !== "" && this.state.box5Sign !== "" && this.state.box6Sign !== "" && this.state.box7Sign !== "" && this.state.box8Sign !== "" && this.state.box9Sign !== "") {
      let newMessage = "Draw!";
      this.setState({setMessage: newMessage, gameOver: true});
    }
  } 

  reset = () => {
    this.setState({
      box1Sign: "",
      box2Sign: "",
      box3Sign: "",
      box4Sign: "",
      box5Sign: "",
      box6Sign: "",
      box7Sign: "",
      box8Sign: "",
      box9Sign: "",
      oShouldMove: "",
      message: "I Am Ready!",
      gameOver: false   
    });
    this.settesObj = {
      1: (sign) => this.setState({box1Sign: sign}),
      2: (sign) => this.setState({box2Sign: sign}),
      3: (sign) => this.setState({box3Sign: sign}),
      4: (sign) => this.setState({box4Sign: sign}),
      5: (sign) => this.setState({box5Sign: sign}),
      6: (sign) => this.setState({box6Sign: sign}),
      7: (sign) => this.setState({box7Sign: sign}),
      8: (sign) => this.setState({box8Sign: sign}),
      9: (sign) => this.setState({box9Sign: sign}),
    }  
}

  render() {
    console.log('gameOver in render is: ', this.state.gameOver)
    console.log('endGame2 in render is: ', this.endGame2)

    const { message, box1Sign, box2Sign, box3Sign, box4Sign, box5Sign, box6Sign, box7Sign, box8Sign, box9Sign} = this.state;
    const { reset, xMove } = this;

    return (

      <div className="App">

        <div className="main-left">

            
            <div className="logo">
              <img src="https://fontmeme.com/permalink/190331/c4c4ee7256af7dbd791ebccdc22e3ff1.png" alt="logo2"/>
            </div>
            
            
          
            <Boxes xMove={xMove} box1Sign={box1Sign} box2Sign ={box2Sign} box3Sign={box3Sign} box4Sign={box4Sign} box5Sign={box5Sign} box6Sign={box6Sign} box7Sign={box7Sign} box8Sign={box8Sign} box9Sign={box9Sign} />

        </div>

        <div className="main-right">

          <div className="right-grid-container">

          <div className="right-top">
            <div style={{width: "30rem"}}>
              <div className="message">{message}</div>
              
            </div>          
          </div>        

          <div className="right-bottom">
            <div className="button" onClick={reset}>RESET</div>
          </div>

          </div>      

        </div>


      </div>
    );
  }
}

export default AppClass;

