
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

    resetHexagon(elements, num);
    // clickedBox(num, hexagons);
    
    
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
          numClicks++;  
          console.log(checkConditions(clickedElements));
          
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
      });
    });
  
    return { elements: hexagonElements, clickedElements };
  }
  
  
  
  
  

  function checkConditions(clickedElements) {
    const bottomRowElements = clickedElements.filter(element => element.row === 4);
    const topRowElements = clickedElements.filter(element => element.row === 0);
  
    if (bottomRowElements.length === 0 || topRowElements.length === 0) {
      return false;
    }
  
    const pathExists = topRowElements.some(topElement => {
      const path = [topElement];
      return checkPathRecursively(bottomRowElements, path);
    });
  
    return pathExists;
  }
  
  function checkPathRecursively(bottomRowElements, path) {
    const currentElement = path[path.length - 1];
  
    if (currentElement.row === 0) {
      return true; // Base case: Reached the top row
    }
  
    const rowAbove = currentElement.row - 1;
    const possibleNeighbors = [currentElement.column - 1, currentElement.column, currentElement.column + 1];
  
    for (const neighbor of possibleNeighbors) {
      const matchingElement = bottomRowElements.find(element => element.row === rowAbove && element.column === neighbor);
  
      if (matchingElement && !path.includes(matchingElement)) {
        path.push(matchingElement);
        const pathExists = checkPathRecursively(bottomRowElements, path);
  
        if (pathExists) {
          return true;
        }
  
        path.pop();
      }
    }
  
    return false; // No valid path found
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
  

  