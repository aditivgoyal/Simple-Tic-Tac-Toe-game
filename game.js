// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
      squares[i].bgColor = 'white';
  }

}
restart.addEventListener('click',clearBoard)

//Calculate if Xs won or Os won
function calculateWin(){
  if (squares[0].textContent === squares[1].textContent && squares[0].textContent === squares[2].textContent && squares[0].textContent!=''){
    colorSquares(0,1,2);
  }
  else if (squares[0].textContent === squares[3].textContent && squares[0].textContent === squares[6].textContent && squares[0].textContent!=''){
    colorSquares(0,3,6);
  }
  else if (squares[0].textContent === squares[4].textContent && squares[0].textContent === squares[8].textContent && squares[0].textContent!=''){
    colorSquares(0,4,8);
  }
  else if (squares[3].textContent === squares[4].textContent && squares[3].textContent === squares[5].textContent && squares[3].textContent!=''){
    colorSquares(3,4,5);
  }
  else if (squares[6].textContent === squares[7].textContent && squares[6].textContent === squares[8].textContent && squares[6].textContent!=''){
    colorSquares(6,7,8);
  }
  else if (squares[1].textContent === squares[4].textContent && squares[1].textContent === squares[7].textContent && squares[1].textContent!=''){
    //console.log("Inside the 1 4 7 loop");
    colorSquares(1,4,7);
  }
  else if (squares[2].textContent === squares[5].textContent && squares[2].textContent === squares[8].textContent && squares[2].textContent!=''){
    //console.log("Inside the 2 5 8 loop");
    colorSquares(2,5,8);
  }
  else if (squares[2].textContent === squares[4].textContent && squares[2].textContent === squares[6].textContent && squares[2].textContent!=''){
    colorSquares(2,4,6);
  }
  else {
    clearColor();
  }
}

// Color squares to yellow if won
function colorSquares(a,b,c){
  for (var i = 0; i < squares.length; i++) {
      if(i === a || i === b || i === c){
        squares[i].bgColor = 'yellow';
      }
      else{
        squares[i].bgColor = 'white';
      }
    }
}

//Color every square to white
function clearColor(){
  for (var i = 0; i < squares.length; i++) {
      squares[i].bgColor = 'white';
    }
}
// Create a function that will check the square marker
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
    squares[i].addEventListener('click', calculateWin);
}
