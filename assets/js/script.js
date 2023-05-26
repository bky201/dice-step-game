
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
                retrieveGame();
                
            } else if (button.getAttribute("data-type") === "start-game"){
                displayBoard();
                button.disabled = true;
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

function continueGame(buttonType) {
    
    if (buttonType === "new-game") {
        for (let i = 0; i < hexagons.length; i++) {
            const num = hexagons[i].querySelector('p');
            num.innerHTML = Math.floor(Math.random()*6)+1;
        };
     
    // Reset number of moves to zero
        steps.innerHTML = "0";

    // Reset total score to zero    
        score.innerHTML = "0";

    } 
    else if (buttonType === "reset-game") {

        var resethexagons = document.getElementsByClassName("hexagon");
        var resetsteps = document.getElementById("moves").innerText;
        var resetscore = document.getElementById("total-score").innerText;
        
    
    } else if (buttonType === "continue-game") {
        for (let i = 0; i < hexagons.length; i++) {
            const num = hexagons[i].querySelector('p');
            const resetnum = resethexagons[i].querySelector('p');
            num.innerHTML = resetnum.innerHTML;
        };

        steps.innerHTML = resetsteps.innerHTML;
        score.innerHTML = resetscore.innerHTML;
        
    
    }
     else {
        alert(`Unknown button type: ${buttonType}`);
    }
}

function playGame() {

    for (const button of buttons) {

        button.addEventListener("click", function() {
            if (button.getAttribute("data-type") === "new-game"){
               displayBoard("new-game"); 
            } else {
                let buttonType = button.getAttribute("data-type");
                displayBoard(buttonType);
                // alert(`Unknown button type: ${buttonType}`);
            }
        })
    }

    // displayBoard(buttonType)

}

function checkBox() {

}

function completePath() {

}

function countMove() {

}

function countScore() {

}

function saveGame() {
    const hexagons = document.getElementsByClassName("number");
    const hexagonsArray = Array.from(hexagons); //convert NodeList to an array

    const hexagonsString = JSON.stringify(hexagonsArray); // convert elements array to string

    localStorage.setItem("hexagonElements", hexagonsString);
    
    const score = document.getElementById("total-score");
    const scoreArray = Array.from(score); //convert NodeList to an array

    const scoreString = JSON.stringify(scoreArray); // convert elements array to string

    localStorage.setItem("scoreElements", scoreString);
    
    const steps = document.getElementById("moves");
    const stepsArray = Array.from(steps); //convert NodeList to an array

    const stepsString = JSON.stringify(stepsArray); // convert elements array to string

    localStorage.setItem("stepsElements", stepsString);
    
    }

function retrieveGame() {

    const savedhexagonsString = localStorage.getItem('hexagonElements');
    const savedhexagon = arrayToNodeList(JSON.parse(savedhexagonsString));
    const savedscoreString = localStorage.getItem('scoreElements');
    const savedScore = arrayToNodeList(JSON.parse(savedscoreString));
    const savedstepsString = localStorage.getItem('stepsElements');
    const savedSteps = arrayToNodeList(JSON.parse(savedstepsString));

    const hexagons = document.getElementsByClassName("number");
        for (let i = 0; i < hexagons.length; i++) {
            hexagons[i].textContent = savedhexagon[i].textContent;
        }

    const score = document.getElementById("total-score");
    score.textContent = savedScore.textContent;

    const steps = document.getElementById("moves");
    steps.textContent = savedSteps.textContent;
    
}

// converting array to Node list
function arrayToNodeList(array) {
    const fragment = document.createDocumentFragment();
    array.forEach(function (item) {
      fragment.appendChild(item);
    });
    return fragment.childNodes;
  }
  