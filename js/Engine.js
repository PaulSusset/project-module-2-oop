class Engine {
    constructor(theRoot) {
        this.root = theRoot;
        this.player = new Player(this.root);
        this.enemies = [];
    }

    gameLoop = () => {
        if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
        let timeDiff = new Date().getTime() - this.lastFrame;
        this.lastFrame = new Date().getTime();
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff);
        });
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed;
        });
        while (this.enemies.length < MAX_ENEMIES) {
            const spot = nextEnemySpot(this.enemies);
            this.enemies.push(new Enemy(this.root, spot));
        }
        updateScore();
        if (this.isPlayerDead()) {
            this.enemies = [];
            retry();
        } else {
            setTimeout(this.gameLoop, 20);
        }
    };

    isPlayerDead = () => {
        let dead = false;
        let enemyX = this.enemies.map(key => key.x);
        enemyX.forEach((enemy, id) => {
            if (
                enemy === this.player.x &&
                this.enemies[id].y >
                    GAME_HEIGHT - PLAYER_HEIGHT - ENEMY_HEIGHT &&
                this.enemies[id].y < GAME_HEIGHT - PLAYER_HEIGHT - 10
            ) {
                dead = true;
            }
        });
        return dead;
    };
}
let played10 = false;
let played25 = false;
let played40 = false;
let played60 = false;
let played80 = false;
let played100 = false;
function updateScore() {
    document.getElementById("score").innerHTML = score;
    if (score >= highscore) {
        highscore = score;
        document.getElementById("highscore").innerHTML = highscore;
    }
    let x = audio[playerSelect];
    switch (score) {
        case 10:
            if (!played10) {
                new Audio(x.p10).play();
            }
            played10 = true;
            break;
        case 25:
            if (!played25) {
                new Audio(x.p25).play();
            }
            played25 = true;
            break;
        case 40:
            if (!played40) {
                new Audio(x.p40).play();
            }
            played40 = true;
            break;
        case 60:
            if (!played60) {
                new Audio(x.p60).play();
            }
            played60 = true;
            break;
        case 80:
            if (!played80) {
                new Audio(x.p80).play();
            }
            played80 = true;
            break;
        case 100:
            if (!played100) {
                new Audio(x.p100).play();
            }
            played100 = true;
            break;
    }
}
function retry() {
    if (round < 2) {
        const container = document.getElementById("retry");
        const retry = document.createElement("div");
        retry.innerText = "Try again?";
        retry.id = "retryButton";
        container.appendChild(retry);

        retry.classList.add("retryText");
        retry.classList.add("text");
        container.style.width = `${GAME_WIDTH}`;
        container.style.height = `${GAME_HEIGHT - 44}`;
    }

    round += 1;
    document.getElementById("retryButton").addEventListener("click", reset);
    document.getElementById("retry").classList.remove("display");
    let bye = document.querySelectorAll("#app>img");
    bye.forEach(img => img.remove());
}
function reset() {
    document.querySelector(".characterSelect").style.display = "flex";
    characterSelectScreen();
    addBackground(document.getElementById("app"));
    score = 0;
    played10 = false;
    played25 = false;
    played40 = false;
    played60 = false;
    played80 = false;
    played100 = false;
    document.getElementById("retryButton").removeEventListener("click", reset);
    document.getElementById("retry").classList.toggle("display");
    document.createElement("div").addEventListener("click", reset);
}
