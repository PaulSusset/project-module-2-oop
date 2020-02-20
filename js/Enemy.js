class Enemy {
    constructor(theRoot, enemySpot) {
        this.root = theRoot;
        this.spot = enemySpot;
        this.x = enemySpot * ENEMY_WIDTH;
        this.y = -ENEMY_HEIGHT;
        this.destroyed = false;
        this.domElement = document.createElement("img");
        this.domElement.src = PLAYER_OPTION[playerSelect].enemy;
        this.domElement.style.position = "absolute";
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = 5;
        theRoot.appendChild(this.domElement);
        this.speed = Math.random() / 2 + 0.25;
    }

    // We set the speed property of the enemy. This determines how fast it moves down the screen.
    // To make sure that every enemy has a different speed, we use Math.random()
    // this method will be called on the enemy instance every few milliseconds. The parameter
    // timeDiff refers to the number of milliseconds since the last update was called.
    update(timeDiff) {
        // We update the y property of the instance in proportion of the amount of time
        // since the last call to update. We also update the top css property so that the image
        // is updated on screen
        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;
        // If the y position of the DOM element is greater than the GAME_HEIGHT then the enemy is at the bottom
        // of the screen and should be removed. We remove the DOM element from the root DOM element and we set
        // the destroyed property to indicate that the enemy should no longer be in play
        if (this.y > GAME_HEIGHT) {
            this.root.removeChild(this.domElement);
            this.destroyed = true;
            score++;
        }
    }
    remove() {
        remove(this);
    }
}
