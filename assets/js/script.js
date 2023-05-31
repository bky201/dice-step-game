document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.getElementsByClassName("btn");

  for (const button of buttons) {
    button.addEventListener("click", createButtonClickHandler(button));
  }

  function createButtonClickHandler(button) {
    const dataType = button.getAttribute("data-type");

    function handleNewGame() {
      window.location.href = "game.html";
    }

    function handleEndGame() {
      saveGame("savedPage");
      window.location.href = "index.html";
    }

    function handleContinueGame() {
      window.location.href = "game.html";
      retrieveGame("savedPage");
      deleteGame("savedPage");
    }

    function handleStartGame() {
      displayBoard();
      button.disabled = true;
    }

    function handleRollDice() {
      rollDice();
    }

    function handleStart() {
      startGame();
    }

    function handleRestartGame() {
      restartGame();
    }

    function handleWinner() {
      closeWinPopup();
      restartGame();
    }

    return function() {
      if (dataType === "new-game") {
        handleNewGame();
      } else if (dataType === "end-game") {
        handleEndGame();
      } else if (dataType === "continue-game") {
        handleContinueGame();
      } else if (dataType === "start-game") {
        handleStartGame();
      } else if (dataType === "roll-dice") {
        handleRollDice();
      } else if (dataType === "start") {
        handleStart();
      } else if (dataType === "restart-game") {
        handleRestartGame();
      } else if (dataType === "winner") {
        handleWinner();
      } else {
        alert(`Unknown button type: ${button}`);
      }
    };
  }
});




// pop up pages start screen
var startScreen = document.getElementById("start");
// var startButton = document.getElementById("startButton");


//Game page
var gameScreen = document.getElementById("homePage");
var game = document.getElementById("page");


// Game over screen 
var gameOverScreen = document.getElementById("game-over");


var highestScore = document.getElementById("total-score");
var scores = document.getElementById("game-score");
var steps = document.getElementById("moves");
var totalSteps = document.getElementById("total-steps");

// Game state variable
var gameStarted = false;

// Function to start the game
function startGame() {
  // Show the game screen and hide the start screen
  gameScreen.style.display = 'block';
  startScreen.style.display = 'none';

  // Set gameStarted flag to true
  gameStarted = true;

}

// Function to end the game
function endGame() {
  // Show the game over screen and hide the game screen
  gameOverScreen.style.display = 'block';
  game.style.display = 'none';



  steps = parseInt(document.getElementById("moves").textContent);
  totalSteps.textContent = steps;
  scores.textContent = 100 - parseInt(steps) * 2;
  highestScore.textContent = scores.textContent;

  // Set gameStarted flag to false
  gameStarted = false;

}


// Function to restart the game
function restartGame() {
  // Hide the game over screen and show the start screen
  gameOverScreen.style.display = 'none';
  window.location.href = "index.html";
  startScreen.style.display = 'block';

}


function checkGameOver() {
  let steps = parseInt(document.getElementById("moves").textContent);
  if (steps === 40) {
    // Player has lost all lives, end the game
    endGame();
  }
}

// Win popup

// Open the "You Win" popup
function showWinPopup() {
  document.getElementById("winPopup").style.display = "block";
}

// Close the "You Win" popup
function closeWinPopup() {
  document.getElementById("winPopup").style.display = "none";
}


function checkWinGame(path) {

  for (var element of path) {
    element.style.backgroundColor = "red";
  }
  showWinPopup();

}


/**
* displayBoard is called when the user starts
* new game or resets a game
*/
function displayBoard() {
  let hexagonsNum = document.getElementsByClassName("number");
  
  for (let hexagon of hexagonsNum) {
      hexagon.innerHTML = Math.floor(Math.random()*6)+1;
  }
   
  // Reset number of moves to zero
  steps.innerHTML = "0";
  // Set Initial Score to 100
  highestScore.innerHTML = "100";
 
}

function rollDice() {
  let diceOne = document.getElementById("dice-one");
  let diceTwo = document.getElementById("dice-two");
  let steps = document.getElementById("moves");
  let num = rollNumber();

  highestScore.textContent = 100 - (parseInt(steps.innerHTML) * 2);

  
  diceOne.src = `assets/images/${num}.png`;
  diceTwo.src = `assets/images/d${num}.png`;
  steps.innerHTML = parseInt(steps.innerHTML) + 1;
  
  let hexagons = document.getElementsByClassName("hexagon");
  checkGameOver();
    
  checkBox(num, hexagons);
  playGame(num, hexagons);
}

var path1 = [];
var path2 = [];
var path3 = [];
var path4 = [];
var path5 = [];
var path6 = [];
var path7 = [];
var path8 = [];
var path9 = [];

function playGame(num, hexagons) {
  let matrixElement = listToMatrix(hexagons, 5);

    
    
    resetHexagon(matrixElement, num, clickedElement => {
      // Perform further operations with the clicked element here
      
      if (checkAndIncrementPath1(clickedElement, matrixElement) === 1) {
        path1.push(clickedElement);
        if (path1.length === 5) {
          checkWinGame(path1);
        }
      }

      if (checkAndIncrementPath2(clickedElement, matrixElement)) {
        path2.push(clickedElement);
        if (path2.length === 5) {
          checkWinGame(path2);
        }
      }

      if (checkAndIncrementPath3(clickedElement, matrixElement)) {
        path3.push(clickedElement);
        if (path3.length === 5) {
          checkWinGame(path3);
        }
      }
       
      if (checkAndIncrementPath4(clickedElement, matrixElement)) {
        path4.push(clickedElement);
        if (path4.length === 5) {
          checkWinGame(path4);
        }
      }

      if (checkAndIncrementPath5(clickedElement, matrixElement)) {
        path5.push(clickedElement);
        if (path5.length === 5) {
          checkWinGame(path5);
        }
      }

      if (checkAndIncrementPath6(clickedElement, matrixElement)) {
        path6.push(clickedElement);
        if (path6.length === 5) {
          checkWinGame(path6);
        }
      }

      if (checkAndIncrementPath7(clickedElement, matrixElement)) {
        path7.push(clickedElement);
        if (path7.length === 5) {
          checkWinGame(path7);
        }
      }

      if (checkAndIncrementPath8(clickedElement, matrixElement)) {
        path8.push(clickedElement);
        if (path8.length === 5) {
          checkWinGame(path8);
        }
      }

      if (checkAndIncrementPath9(clickedElement, matrixElement)) {
        path9.push(clickedElement);
        if (path9.length === 5) {
          checkWinGame(path9);
        }
      }
    });
  }

function rollNumber() {
  return Math.floor(Math.random() * 6) + 1;
}


//Array into matrix

function listToMatrix(list, elementsPerSubArray) {
  let matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}


// function returns a highlight of numbers
function checkBox(num, hexagons) {
  for (let element of hexagons) {
      let clickElement = parseInt(element.textContent);
      if (clickElement === num) {
          element.style.backgroundColor = "gold";
      } else {
        if (element.textContent === "") {
          element.style.backgroundColor = "green";
        } else {
          element.style.backgroundColor = "#ccc";
        }
      }
  }
  return hexagons;
}


function resetHexagon(hexagonElements, value, callback) {
  function handleClick(event) {
    const element = event.target;
    if (Number(element.textContent) === value) {
      element.style.backgroundColor = "green";
      element.textContent = "";
      callback(element);

      // Disable click event on all elements
      hexagonElements.forEach(row => {
        row.forEach(div => {
          div.removeEventListener("click", handleClick);
        });
      });
    } else {
      // Reset the background color of all elements except the clicked one
      hexagonElements.forEach(row => {
        row.forEach(div => {
          if (div !== element && div.textContent !== "") {
            div.style.backgroundColor = "#ccc";
          }
        });
      });
    }
  }

  // Enable click event listeners for all elements
  hexagonElements.forEach(row => {
    row.forEach(element => {
      element.removeEventListener("click", handleClick);
      element.addEventListener("click", handleClick);
    });
  });
}


function checkAndIncrementPath1(clickedElement, elements) {
  const targetElements = [
    elements[0][0],
    elements[1][0],
    elements[2][0],
    elements[3][0],
    elements[4][0]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}

function checkAndIncrementPath2(clickedElement, elements) {
  const targetElements = [
    elements[0][0],
    elements[1][1],
    elements[2][0],
    elements[3][1],
    elements[4][0]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}


function checkAndIncrementPath3(clickedElement, elements) {
  const targetElements = [
    elements[0][1],
    elements[1][1],
    elements[2][1],
    elements[3][1],
    elements[4][1]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath4(clickedElement, elements) {
  const targetElements = [
    elements[0][1],
    elements[1][2],
    elements[2][1],
    elements[3][2],
    elements[4][1]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath5(clickedElement, elements) {
  const targetElements = [
    elements[0][2],
    elements[1][2],
    elements[2][2],
    elements[3][2],
    elements[4][2]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath6(clickedElement, elements) {
  const targetElements = [
    elements[0][2],
    elements[1][3],
    elements[2][2],
    elements[3][3],
    elements[4][2]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath7(clickedElement, elements) {
  const targetElements = [
    elements[0][3],
    elements[1][3],
    elements[2][3],
    elements[3][3],
    elements[4][3]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath8(clickedElement, elements) {
  const targetElements = [
    elements[0][3],
    elements[1][4],
    elements[2][3],
    elements[3][4],
    elements[4][3]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}
function checkAndIncrementPath9(clickedElement, elements) {
  const targetElements = [
    elements[0][4],
    elements[1][4],
    elements[2][4],
    elements[3][4],
    elements[4][4]
  ];
  
  if (targetElements.includes(clickedElement)) {
    return 1; // Increment path2
  }

  return 0; // No increment
}


function saveGame(key) {
  const htmlContent = document.documentElement.outerHTML;
  localStorage.setItem(key, htmlContent);
}

function retrieveGame(key) {
  const htmlContent = localStorage.getItem(key);
  if (htmlContent) {
    document.documentElement.innerHTML = htmlContent;
  }
}

function deleteGame(key) {
  localStorage.removeItem(key);
}



