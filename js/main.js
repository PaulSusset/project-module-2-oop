function gameStart() {
    const gameEngine = new Engine(document.getElementById("app"));

    const keydownHandler = event => {
        if (event.code === "ArrowLeft") {
            gameEngine.player.moveLeft();
        }
        if (event.code === "ArrowRight") {
            gameEngine.player.moveRight();
        }
    };
    document.addEventListener("keydown", keydownHandler);
    gameEngine.gameLoop();
}
addBackground(document.getElementById("app"));
document.querySelector(".characterSelect").style.width = `${GAME_WIDTH}px`;
document.querySelector(".characterSelect").style.height = `${GAME_HEIGHT -
    8}px`;
document.querySelector(".scoreboard").style.width = `${GAME_WIDTH}px`;
characterSelectScreen();
function setFighter(event) {
    for (i = 0; i < 4; i++) {
        document
            .getElementById(`${i}`)
            .removeEventListener("click", setFighter);
    }
    let x = event.currentTarget.id;
    playerSelect = x;
    let soundSelect = new Audio(`${audio[playerSelect].Select}`);
    soundSelect.play();
    let bgRemove = 100;
    document.getElementById(bgRemove).remove();
    bgRemove += 1;
    addBackground(document.getElementById("app"));
    document.querySelector(".characterSelect").style.display = "none";
    setTimeout(gameStart, 500);
    document.getElementById("attempts").innerText = round;
}
function characterSelectScreen() {
    for (i = 0; i < 4; i++) {
        document.getElementById(`${i}`).addEventListener("click", setFighter);
        document.querySelector(".characterSelect").style.display = "flex";
    }
}
function playTheme() {
    let theme = new Audio("./audio/mainTheme.mp3");
    theme.volume = 0.2;
    theme.loop = true;
    theme.play();
    document.getElementById("app").removeEventListener("click", playTheme);
}
document.getElementById("app").addEventListener("click", playTheme);
