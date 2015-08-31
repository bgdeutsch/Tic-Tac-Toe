$(document).ready(function(){


  var userInp = prompt("Welcome to Tic-Tac-Toe!  Player 1: In the space below, please choose either X or O");
  var thePlayer = userInp.toUpperCase();
  var playerOne;
  var playerTwo;
  var currentPlayer;
  var gameBoard = ['', '', '', '', '', '', '', '', ''];
  var turn = 1;
  var drawXorO;
  //Declaring somem variables in a global space for the application.



  if(thePlayer === "X") {
    playerOne = "X";
    playerTwo = "O";
  }else if(thePlayer === "O") {
    playerOne = "O";
    playerTwo = "X";
  }else{
    alert("I'm sorry, you've entered an incorrect value.  Please choose X or O");
    location.reload();
  }
  //Allowing player 1 to decide between "X" or "O" as his character.
  //Storing it as a variable, and added a catch for the user inputting wrong value.


  $(".board-space").click(function(event){

    var currentCell = $(event.currentTarget);
    var cellNumber = currentCell.attr("data-cellid");

    if (gameBoard[cellNumber] !== ""){

      alert("Sorry, that space has already been taken.  Try again.");
    //Adds click event for game play -- if user attempts to click a board space
    //That has already been taken, an error alert will pop up.

    } else {

      if(turn % 2 === 0) {

        currentPlayer = playerTwo;

        var drawXorO = $("<h3></h3>");

        currentCell.css("background-color", "black");

        drawXorO.css("color", "#DDF587");

        drawXorO.text(currentPlayer);

        currentCell.append(drawXorO);

        gameBoard.splice(cellNumber, 1, currentPlayer);

        checkWinner();

        turn++;

    //Basic gameplay activity - user clicks on space, (if available)
    //Their symbol will be appended to the board, and stored in the gameBoard array.
    //The application will then check to see if a win condition has been satisfied,
    //And switch turns if not.


      } else {
        currentPlayer = playerOne;

        var drawXorO = $("<h3></h3>");

        currentCell.css("background-color", "black");

        drawXorO.css("color", "#9F87F5");

        drawXorO.text(currentPlayer);

        currentCell.append(drawXorO);

        gameBoard.splice(cellNumber, 1, currentPlayer);

        checkWinner();

        turn++;

      }
    }
  });



  function checkWinner(){
  //Adds a function that will automatically go through each winning possibility,
  //and decide if the game has ended.  If not, it will recognize a tie if each board
  //space has been taken.

    if(
       (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== "") ||
       (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== "") ||
       (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== "") ||
       (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== "") ||
       (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== "") ||
       (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== "") ||
       (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== "") ||
       (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== "")
     ){
       alert("Game over! " +currentPlayer+ " is the winner!");
       toPlayAgain();

     } else if (
      (gameBoard[0] !== "") &&
      (gameBoard[1] !== "") &&
      (gameBoard[2] !== "") &&
      (gameBoard[3] !== "") &&
      (gameBoard[4] !== "") &&
      (gameBoard[5] !== "") &&
      (gameBoard[6] !== "") &&
      (gameBoard[7] !== "") &&
      (gameBoard[8] !== "")){
        alert("Tie Game!");
        toPlayAgain();
      }
    }

    function toPlayAgain(){
    //Adds a feature where user will be prompted if they would like to play again.
    //If they choose yes, the game will reload.  If not, the board state will remain.

      var userToPlayAgain = prompt("Do you want to play again? [Y/N]");
      var userAnswer = userToPlayAgain.toUpperCase();

      if(userAnswer === "Y") {
         location.reload();

      }else if(userAnswer === "N") {

        alert("Thanks for playing!");

      }else{
        alert("You've entered an incorrect key, please choose [Y]es or [N]o");
        toPlayAgain();
      }

    }
  });   //Closes jQuery Wrap
