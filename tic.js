$(document).ready(function(){


  var userInp = prompt("Welcome to Tic-Tac-Toe!  Player 1: In the space below, please choose either X or O");
  var thePlayer = userInp.toUpperCase();
  var playerOne;
  var playerTwo;
  var currentPlayer;
  var gameBoard = ['', '', '', '', '', '', '', '', ''];
  var turn = 1;
  var isGameOver = false;
  var drawTheX;



  if(thePlayer === "X") {
    playerOne = "X";
    playerTwo = "O";
    console.log(playerOne);
    console.log(playerTwo);
  }else if(thePlayer === "O") {
    playerOne = "O";
    playerTwo = "X";
    console.log(playerOne);
    console.log(playerTwo);
  }else{
    alert("I'm sorry, you've entered an incorrect value.  Please choose X or O");
    location.reload();
  }


  $(".board-space").click(function(event){

    var currentCell = $(event.currentTarget);
    var cellNumber = currentCell.attr("data-cellid");

    if (gameBoard[cellNumber] !== ""){

      alert("Sorry, that space has already been taken.  Try again.");

    } else {

      if(turn % 2 === 0) {

        currentPlayer = playerTwo;

        console.log(currentPlayer);


        var drawTheX = $("<h3></h3>");

        currentCell.css("background-color", "black");

        drawTheX.text(currentPlayer);

        currentCell.append(drawTheX);

        gameBoard.splice(cellNumber, 1, currentPlayer);

        console.log(gameBoard);

        checkWinner();

        turn++;


      } else {
        currentPlayer = playerOne;
        console.log(currentPlayer);
        //logic for playerOne

        var drawTheX = $("<h3></h3>");

        currentCell.css("background-color", "black");

        drawTheX.text(currentPlayer);

        currentCell.append(drawTheX);

        gameBoard.splice(cellNumber, 1, currentPlayer);

        checkWinner();

        turn++;

      }
    }
  });



  function checkWinner(){
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
       alert("Game over! " +gameBoard[0]+ " is the winner!");
       location.reload();

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
        location.reload();
      }
    }
  });   //Closes jQuery Wrap
