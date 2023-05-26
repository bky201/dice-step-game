
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
    let steps = document.getElementById("total-score");
    let score = document.getElementById("moves");
    for (let hexagon of hexagons) {
        hexagon.innerHTML = Math.floor(Math.random()*6)+1;
    };
     
    // Reset number of moves to zero
        steps.innerHTML = "0";

    // Reset total score to zero    
        score.innerHTML = "0";
   
}


function playGame() {

    let diceOne = document.getElementById("dice-one");
    let diceTwo = document.getElementById("dice-two");
    let num = Math.floor(Math.random() * 6) + 1;
    let steps = document.getElementById("moves");
    
    diceOne.src = `assets/images/${num}.png`;
    diceTwo.src = `assets/images/d${num}.png`;
    steps.innerHTML = parseInt(steps.innerHTML) + 1;
     
    let choosenElements = document.getElementsByClassName('number');
    for (let element of choosenElements) {
        let clickElement = parseInt(element.innerHTML);
        if (clickElement === num) {
            element.parentNode.style.backgroundColor = "gold";
            element.addEventListener("click", checkBox);
        } else {
            element.parentNode.style.backgroundColor = "#ccc";
        }
    }
    
    
}

function checkBox() {
    let highLightedHexagons = document.getElementsByClassName("hexagon");
    let goldDivElements = Array.from(highLightedHexagons).filter(div => {
    let computedStyle = window.getComputedStyle(div);
    let backgroundColor = computedStyle.backgroundColor;
    return backgroundColor === 'gold' || backgroundColor === 'rgb(255, 215, 0)' || backgroundColor === '#FFD700';
      });


        for (let goldDiv of goldDivElements) {
            goldDiv.addEventListener("click", function(event){
                event.preventDefault();
                if (event.target) {
                    goldDiv.style.backgroundColor = "green";
                    goldDiv.childNodes.innerHTML = null;
                } else {
                    goldDiv.style.backgroundColor = "#ccc";
                }
            })
        }

}

function completePath() {

}

function countMove() {

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


  