const button = document.querySelectorAll("button");
const xScore = document.getElementById("1");
const oScore = document.getElementById("2");
const turnCounter = document.getElementById("turn");

class Game {
  constructor() {
    this.tracker = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    this.winner = null;
    this.score = { 1: 0, 2: 0 };
    this.gameOver = false;
    this.turn = 1;
  }

  winChecker() {
    switch (true) {
      case this.tracker[0] === this.tracker[1] &&
        this.tracker[0] === this.tracker[2]:
      case this.tracker[0] === this.tracker[3] &&
        this.tracker[0] === this.tracker[6]:
      case this.tracker[0] === this.tracker[4] &&
        this.tracker[0] === this.tracker[8]:
 
      case this.tracker[2] === this.tracker[5] &&
        this.tracker[2] === this.tracker[8]:
      case this.tracker[2] === this.tracker[4] &&
        this.tracker[2] === this.tracker[6]:
   
      case this.tracker[3] === this.tracker[4] &&
        this.tracker[3] === this.tracker[5]:
      case this.tracker[1] === this.tracker[4] &&
        this.tracker[1] === this.tracker[7]:
       
      case this.tracker[6] === this.tracker[7] &&
        this.tracker[6] === this.tracker[8]:
       
      
       
          
          
        this.turn === 1 ? this.winner = 2 : this.winner = 1
     
        this.score[this.winner]++
        this.gameOver = true;
        turnCounter.innerText = `Player${this.winner} wins!`;
        break;
    }
  }

  toggleButton(index) {
    console.log(this.turn)
    if (!this.gameOver) {
      if (this.turn === 1) {
        button[index].innerText = "X";
        this.tracker[index] = 1;
        this.turn++;
        turnCounter.innerText = "It is O's turn.";
      } else {
        button[index].innerText = "O";
        this.tracker[index] = 2;
        this.turn--;
        turnCounter.innerText = "It is X's turn.";
      }
      this.winChecker();
    }
  }

  resetBoard() {
    if (this.winner === 1) {
      xScore.innerText = this.score[1];
    } else {
      oScore.innerText = this.score[2];
    }
    this.tracker = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    button.forEach((item) => {
      if (item.innerText !== "Click to reset") {
        item.innerText = "‎‎‎";
      }
    });
    this.gameOver = false;
    this.turn === 1
      ? (turnCounter.innerText = "It is X's turn.")
      : (turnCounter.innerText = "It is O's turn.");
  }
}

const XO = new Game();
console.log(XO);
