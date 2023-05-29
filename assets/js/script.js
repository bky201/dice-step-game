
// Loading the page and add event listner to the buttons page
document.addEventListener('DOMContentLoaded', function() {
  // assign variable refernce to the button element
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
      // get an event listener to each button
      button.addEventListener("click", function() {
          if (button.getAttribute("data-type") === "new-game"){
             // navigate to each HTML page
              window.location.href = "game.html"; 

          } else if (button.getAttribute("data-type") === "end-game"){
              saveGame("savedPage");
              window.location.href = "index.html"
          } else if (button.getAttribute("data-type") === "continue-game"){
              window.location.href = "game.html"
              retrieveGame("savedPage");
              deleteGame("savedPage");
              
          } else if (button.getAttribute("data-type") === "start-game"){
              displayBoard();
              button.disabled = true;
          } else if (button.getAttribute("data-type") === "roll-dice"){
              
              playGame();
              
              
          } else {
              alert(`Unknown button type: ${buttonType}`);
          }
          
      
      })
  }

     
})

/**
* displayBoard is called when the user starts
* new game or resets a game
*/
function displayBoard() {
  let hexagonsNum = document.getElementsByClassName("number");
  let score = document.getElementById("total-score");
  let steps = document.getElementById("moves");
  
  for (let hexagon of hexagonsNum) {
      hexagon.innerHTML = Math.floor(Math.random()*6)+1;
  };
   
  // Reset number of moves to zero
      steps.innerHTML = "0";

  // Reset total score to zero    
      score.innerHTML = "0";
 
}


function playGame() {
  let hexagons = document.getElementsByClassName("number");
  let diceOne = document.getElementById("dice-one");
  let diceTwo = document.getElementById("dice-two");
  let steps = document.getElementById("moves");
  let num = Math.floor(Math.random() * 6) + 1;

  
  diceOne.src = `assets/images/${num}.png`;
  diceTwo.src = `assets/images/d${num}.png`;
  steps.innerHTML = parseInt(steps.innerHTML) + 1;
  checkBox(num, hexagons);
  let elements = Array.from(document.getElementsByClassName("hexagon"));

  y = resetHexagon(elements, num);
  console.log(checkPaths(y));
  // clickedBox();
  
  
}

// function returns a highlight of numbers
function checkBox(num, hexagons) {
  for (let element of hexagons) {
      let clickElement = parseInt(element.innerHTML);
      if (clickElement === num) {
          element.parentNode.style.backgroundColor = "gold";
      } else {
          element.parentNode.style.backgroundColor = "#ccc";
      }

  }
  
  return hexagons;

}

function completePath() {

}


function resetHexagon(hexagonElements, value) {
  let clickedElements = [];

  let numClicks = 0;
  // Iterate through all div elements
  hexagonElements.forEach(element => {
    const initialColor = window.getComputedStyle(element).backgroundColor;
    element.addEventListener("click", function handleClick() {
        // Check if the element's number content matches the given value
      if (Number(element.textContent) === value && numClicks === 0) {
        // Set the background color of the clicked element to green
        element.style.backgroundColor = "green";
        element.textContent = '';
        element.removeEventListener("click", handleClick);
        
        // Add the clicked element to the array of clicked elements
        if (!clickedElements.includes(element)) {
          clickedElements.push(element);
        }
      } else {
        // Reset the background color of all elements except the clicked one
        hexagonElements.forEach(div => {
          if (div !== element && div.textContent !== "") {
            div.style.backgroundColor = "#ccc";
            div.removeEventListener("click", handleClick);
            element.removeEventListener("click", handleClick);
          }
        });
      }
      numClicks++;  
      
    });
  });

  return clickedElements;
}


function checkPaths(clickedElements) {
  let path1 = 0;
  let path2 = 0;
  let path3 = 0;
  let path4 = 0;
  let path5 = 0;
  let path6 = 0;
  let path7 = 0;
  let path8 = 0;
  let path9 = 0;

  for (const clickedElement of clickedElements) {
    const row = clickedElement.row;
    const col = clickedElement.column;

    if (row === 0 && col === 0) {
      path1++;
      if (path1 === 5) return 1;
    } else if (row === 1 && col === 0) {
      path1++;
      if (path1 === 5) return 1;
    } else if (row === 2 && col === 0) {
      path1++;
      if (path1 === 5) return 1;
    } else if (row === 3 && col === 0) {
      path1++;
      if (path1 === 5) return 1;
    } else if (row === 4 && col === 0) {
      path1++;
      if (path1 === 5) return 1;
    } else if (row === 0 && col === 0) {
      path2++;
      if (path2 === 5) return 2;
    } else if (row === 1 && col === 1) {
      path2++;
      if (path2 === 5) return 2;
    } else if (row === 2 && col === 0) {
      path2++;
      if (path2 === 5) return 2;
    } else if (row === 3 && col === 1) {
      path2++;
      if (path2 === 5) return 2;
    } else if (row === 4 && col === 0) {
      path2++;
      if (path2 === 5) return 2;
    } else if (row === 0 && col === 1) {
      path3++;
      if (path3 === 5) return 3;
    } else if (row === 1 && col === 1) {
      path3++;
      if (path3 === 5) return 3;
    } else if (row === 2 && col === 1) {
      path3++;
      if (path3 === 5) return 3;
    } else if (row === 3 && col === 1) {
      path3++;
      if (path3 === 5) return 3;
    } else if (row === 4 && col === 1) {
      path3++;
      if (path3 === 5) return 3;
    } else if (row === 0 && col === 1) {
      path4++;
      if (path4 === 5) return 4;
    } else if (row === 1 && col === 2) {
      path4++;
      if (path4 === 5) return 4;
    } else if (row === 2 && col === 1) {
      path4++;
      if (path4 === 5) return 4;
    } else if (row === 3 && col === 2) {
      path4++;
      if (path4 === 5) return 4;
    } else if (row === 4 && col === 1) {
      path4++;
      if (path4 === 5) return 4;
    } else if (row === 0 && col === 2) {
      path5++;
      if (path5 === 5) return 5;
    } else if (row === 1 && col === 2) {
      path5++;
      if (path5 === 5) return 5;
    } else if (row === 2 && col === 2) {
      path5++;
      if (path5 === 5) return 5;
    } else if (row === 3 && col === 2) {
      path5++;
      if (path5 === 5) return 5;
    } else if (row === 4 && col === 2) {
      path5++;
      if (path5 === 5) return 5;
    } else if (row === 0 && col === 2) {
      path6++;
      if (path6 === 5) return 6;
    } else if (row === 1 && col === 3) {
      path6++;
      if (path6 === 5) return 6;
    } else if (row === 2 && col === 2) {
      path6++;
      if (path6 === 5) return 6;
    } else if (row === 3 && col === 3) {
      path6++;
      if (path6 === 5) return 6;
    } else if (row === 4 && col === 2) {
      path6++;
      if (path6 === 5) return 6;
    } else if (row === 0 && col === 3) {
      path7++;
      if (path7 === 5) return 7;
    } else if (row === 1 && col === 3) {
      path7++;
      if (path7 === 5) return 7;
    } else if (row === 2 && col === 3) {
      path7++;
      if (path7 === 5) return 7;
    } else if (row === 3 && col === 3) {
      path7++;
      if (path7 === 5) return 7;
    } else if (row === 4 && col === 3) {
      path7++;
      if (path7 === 5) return 7;
    } else if (row === 0 && col === 3) {
      path8++;
      if (path8 === 5) return 8;
    } else if (row === 1 && col === 4) {
      path8++;
      if (path8 === 5) return 8;
    } else if (row === 2 && col === 3) {
      path8++;
      if (path8 === 5) return 8;
    } else if (row === 3 && col === 4) {
      path8++;
      if (path8 === 5) return 8;
    } else if (row === 4 && col === 3) {
      path8++;
      if (path8 === 5) return 8;
    } else if (row === 0 && col === 4) {
      path9++;
      if (path9 === 5) return 9;
    } else if (row === 1 && col === 4) {
      path9++;
      if (path9 === 5) return 9;
    } else if (row === 2 && col === 4) {
      path9++;
      if (path9 === 5) return 9;
    } else if (row === 3 && col === 4) {
      path9++;
      if (path9 === 5) return 9;
    } else if (row === 4 && col === 4) {
      path9++;
      if (path9 === 5) return 9;
    }
  }

  return 0;
}




function countScore() {

}

function saveGame(key) {
  const htmlContent = document.documentElement.outerHTML;
  localStorage.setItem(key, htmlContent);
}


function retrieveGame(key) {
  const htmlContent = localStorage.getItem(key);
  if (htmlContent) {
    document.open();
    document.write(htmlContent);
    document.close();
  }
}

function deleteGame(key) {
  localStorage.removeItem(key);
}


