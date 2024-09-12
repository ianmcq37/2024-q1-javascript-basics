//@ts-check

/** @type { HTMLElement } */
//@ts-ignore We know player controls is not null
let playerControls = document.getElementById("player-controls");

//game-results
/** @type { HTMLElement } */
//@ts-ignore We know game result header is not null
let gameResultHeader = document.getElementById("game-results");

/** @type { HTMLElement } */
//@ts-ignore We know game restart section is not null
let gameRestartSection = document.getElementById("game-restart");

gameResultHeader.innerText = "I've been expecting you...";

let isGameOver = false;

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

function determineOutcome(playerWeapon, computerWeapon) {
	if (playerWeapon.type === computerWeapon.type) {
		return "Let's go again, shall we?";
	}

	isGameOver = true;
	showRestart();

	if (playerWeapon.beats === computerWeapon.type) {
		return `You got lucky.`
	}

	return `If you wish to defeat me, train for another 100 year.`
}

function playerControlHandler(e) {
	if (isGameOver) {
		return;
	}

	let weaponName = e.target.innerText;
	let playerWeapon = weapons.find((w) => w.type === weaponName);

	if (!playerWeapon) {
		console.log("ERROR! Player weapon undefined");
		return;
	}

	let computerWeapon = pickRandomWeapon(weapons);

	let result = determineOutcome(playerWeapon, computerWeapon);

	gameResultHeader.innerText = result;
	console.log(result);
}

function gameRestartHandler(e) {
	if (e.target.id === "btn-restart") {
		isGameOver = false;
		showPlayerControls();
		gameResultHeader.innerText = "";
	}
}

function showRestart() {
	gameRestartSection.style.display = "initial";
	playerControls.style.display = "none";
}

function showPlayerControls() {
	gameRestartSection.style.display = "none";
	playerControls.style.display = "initial";
}

playerControls?.addEventListener("click", playerControlHandler);

gameRestartSection.addEventListener("click", gameRestartHandler);