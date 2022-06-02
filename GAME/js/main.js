
/*--------------------------------
GlOBAL VARIABLES
----------------------------------*/

const button = document.querySelector("button");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole")
const scoreBoard = document.querySelector(".score")

 let score = 0;
 let timeIsUp = false;
 let lasthole;

 
/*--------------------------------
Functions
----------------------------------*/

 // How Quickly mole appers and diappears
 function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Random Hole
function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    //if the mole appers 2 time or more
    if (hole === lasthole) {
    // stop the function from running 
    return randomHole(holes);
}

 //force the mole to appear in random hole
 lasthole = hole;
 return hole;
}

//When mole Appers 
function appear() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    console.log(hole);
    // Show the mole
    hole.classList.add("up");
    
    setTimeout(() => {
        // Hide ALL the moles game over 
    
        hole.classList.remove("up");

        if(!timeIsUp) {
            appear();
        }

    }, time);
}
   

function startGame() {
    scoreBoard.textContent = 0;
    timeIsUp = false;
    score = 0;
    const timeout = 10000;

    appear();
    //END the game when time is up
    setTimeout(() => (timeIsUp = true), timeout);   
}


function whack() {
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}


/*--------------------------------
Event Listeners
----------------------------------*/
button.addEventListener("click", startGame);
moles.forEach((mole) => mole.addEventListener("click", whack));



