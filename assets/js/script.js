
// Loading the page and add event listner to the buttons page
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "new-game"){
               displayBoard("hexagon"); 
            } else {
                let buttonType = this.getAttribute("data-type");
                // alert(`You clicked ${buttonType}`);
            }
        })
    }

    displayBoard("hexagon")
    
})

/**
 * displayBoard is called when the user starts
 * new game or resets a game
 */
function displayBoard(className) {
    let hexagons = document.getElementsByClassName("hexagon");
    for (let i = 0; i < hexagons.length; i++) {
        const number = hexagons[i].querySelector('p');
        number.innerHTML = Math.floor(Math.random()*6)+1;
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

