//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");

//function rockClicked(rock) {console.log("rock was selected");}
//btnRock?.addEventListener("click", rockClicked);

//function paperClicked(paper) {console.log("paper was selected");}
//btnPaper?.addEventListener("click", paperClicked);

//function scissorsClicked(scissors) {console.log("scissors was selected");}
//btnScissors?.addEventListener("click", scissorsClicked);

let weapons = [
    {
        type: "Rock",
        beats: "Scissors",
    },
    {
        type: "Paper",
        beats: "Rock",
    },
    {
        type: "Scissors",
        beats: "Paper",
    },
];

function pickRandomWeapon(weapons) {
    let randy = Math.floor(Math.random() * weapons.length);
    return weapons[randy];
}

function playerControlHandler(e) {
    let weaponName = e.target.innerText;
    console.log(weaponName, " was selected")
}

playerControls?.addEventListener("click", playerControlHandler);

