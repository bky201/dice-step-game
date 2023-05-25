
// Loading the page and add event listner to the buttons page
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "new-game"){
               displayBoard("new-game"); 
            } else {
                let buttonType = this.getAttribute("data-type");
                displayBoard(buttonType);
            }
        })
    }

    displayBoard("new-game")
    
})

/**
 * displayBoard is called when the user starts
 * new game or resets a game
 */
function displayBoard(buttonType) {
    // Create an array of hexagon elements
    let hexagons = document.getElementsByClassName("hexagon");
    let steps = document.getElementById("moves");
    let score = document.getElementById("total-score");

    


    if (buttonType === "new-game") {
        for (let i = 0; i < hexagons.length; i++) {
            const num = hexagons[i].querySelector('p');
            num.innerHTML = Math.floor(Math.random()*6)+1;
        };
        
        steps.innerHTML = "0";

        score.innerHTML = "0";

    } else {
        alert(`Unknown button type: ${buttonType}`);
    }
}

function playGame() {

}

function checkBox() {

}

function completePath() {

}

function countMove() {

}

function countScore() {

}

