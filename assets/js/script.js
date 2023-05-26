
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
                displayBoard("new-game");

            } else if (button.getAttribute("data-type") === "reset-game"){
                window.location.href = "index.html"
            }
        
        })
    }
    
    
})

// Create an array of hexagon elements
let hexagons = document.getElementsByClassName("hexagon");
let steps = document.getElementById("moves");
let score = document.getElementById("total-score");

/**
 * displayBoard is called when the user starts
 * new game or resets a game
 */
function displayBoard(buttonType) {
    
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

