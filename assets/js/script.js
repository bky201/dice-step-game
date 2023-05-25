
// Loading the page and add event listner to the buttons page
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {

        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "new-game"){
                // alert("You clicked new-game");
            } else {
                let buttonType = this.getAttribute("data-type");
                // alert(`You clicked ${buttonType}`);
            }
        })
    }
})

/**
 * displayBoard is called when the user starts
 * new game or resets a game
 */
function displayBoard() {
    const hexagons = document.getElementsByClassName("hexagon");
    for (const hexagon of hexagons) {
        hexagon = Math.floor(Math.random()*6)+1;
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

