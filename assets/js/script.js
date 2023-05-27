
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
                saveGame();
                window.location.href = "index.html"
            } else if (button.getAttribute("data-type") === "continue-game"){
                window.location.href = "game.html"
                retrieveGame();
                
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
    let hexagons = document.getElementsByClassName("number");
    let score = document.getElementById("total-score");
    
    for (let hexagon of hexagons) {
        hexagon.innerHTML = Math.floor(Math.random()*6)+1;
    };
     
    // Reset number of moves to zero
        steps.innerHTML = "0";

    // Reset total score to zero    
        score.innerHTML = "0";
   
}

let diceOne = document.getElementById("dice-one");
let diceTwo = document.getElementById("dice-two");
let steps = document.getElementById("moves");

function playGame() {
    let num = Math.floor(Math.random() * 6) + 1;

    
    diceOne.src = `assets/images/${num}.png`;
    diceTwo.src = `assets/images/d${num}.png`;
    steps.innerHTML = parseInt(steps.innerHTML) + 1;
    checkBox(num);
    let elements = Array.from(document.getElementsByClassName("hexagon"));

    resetHexagon(elements, num);
    // clickedBox();
    
    
}
let choosenElements = document.getElementsByClassName('number');

// function returns a highlight of numbers
function checkBox(num) {
    for (let element of choosenElements) {
        let clickElement = parseInt(element.innerHTML);
        if (clickElement === num) {
            element.parentNode.style.backgroundColor = "gold";
        } else {
            element.parentNode.style.backgroundColor = "#ccc";
        }

    }
    
    return choosenElements;

}

function completePath() {

}


function resetHexagon(hexagonElements, value) {
    let clickedElements = [];
  
    // Iterate through all div elements
    hexagonElements.forEach(element => {
      const initialColor = window.getComputedStyle(element).backgroundColor;
  
      element.addEventListener("click", function handleClick() {
        // Check if the element's number content matches the given value
        if (Number(element.textContent) === value) {
          // Set the background color of the clicked element to green
          element.style.backgroundColor = "green";
          element.innerHTML = "0";
  
          // Add the clicked element to the array of clicked elements
          if (!clickedElements.includes(element)) {
            clickedElements.push(element);
          }
        } else {
          // Reset the background color of all elements except the clicked one
          hexagonElements.forEach(div => {
            if (div !== element) {
              div.style.backgroundColor = "#ccc";
              div.removeEventListener("click", handleClick);
            }
          });
        }
      });
    });
  
    return { elements: hexagonElements, clickedElements };
  }
  
  
  
  
  

function handleEvent(e) {

}



function countScore() {

}

function saveGame() {
    // Get the entire HTML content of the page
    const pageContent = document.documentElement.outerHTML;

    // Save the content to local storage
    localStorage.setItem('savedPageContent', pageContent);

    }


function retrieveGame() {

    // Retrieve the saved page content from local storage
    const savedPageContent = localStorage.getItem('savedPageContent');

    // Check if there is saved content
    if (savedPageContent) {
    // Set the retrieved content as the new HTML content
    document.open();
    document.write(savedPageContent);
    document.close();
  
    // Delete the saved content from local storage
    localStorage.removeItem('savedPageContent');
    }
    
}


  