// In this file we have some data that the other source files will use.
// Most of this data is stored in constants.
// Constants are just variables that never change. By convention,
// We write constants with upper case letters.

// The GAME_WIDTH and GAME_HEIGHT constants denote the size
// of the game area in pixels and is used in engine-utilities.js.
const GAME_WIDTH = 375;
const GAME_HEIGHT = 500;

// These constants represent the width and height of an enemy in pixels
// as well as the maximum number of enemies on screen at any given time.
const ENEMY_WIDTH = 75;
const ENEMY_HEIGHT = 94;
const MAX_ENEMIES = 3;

// These constants represent the player width and height.
const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 103;

let playerSelect = 0;
const PLAYER_OPTION = [
    {
        name: "Teemo",
        sprite: "./images/teemo.gif",
        bg: "./images/SR.jpg",
        enemy: "./images/trap.png"
    },
    {
        name: "OSTeemo",
        sprite: "./images/OSTeemo.png",
        bg: "./images/swamp.jpg",
        enemy: "./images/OSenemy.png"
    },
    {
        name: "Astro Teemo",
        sprite: "./images/AstroTeemo_sprite.png",
        bg: "./images/stars.png",
        enemy: "./images/astroEnemy.gif"
    },
    {
        name: "Beemo",
        sprite: "./images/beemoSprite.png",
        bg: "./images/beemoBG.jpg",
        enemy: "./images/BeemoEnemy.png"
    }
];
let round = 1;
let score = "0";
let highscore = "000";

const audio = [
    {
        Select: "./Audio/TeemoSelect.mp3",
        p25: "./Audio/Teemo25.mp3",
        p40: "./Audio/Teemo50.mp3",
        p60: "./Audio/Teemo100.mp3",
        p80: "",
        p100: ""
    },
    {
        Select: "./Audio/OSSelect.mp3",
        p10: "./Audio/OS10.mp3",
        p25: "./Audio/OS25.mp3",
        p40: "./Audio/OS50.mp3",
        p60: "./Audio/OS75.mp3",
        p80: "./Audio/OS90.mp3",
        p100: "./Audio/OS100.mp3"
    },
    {
        Select: "./Audio/AstroSelect.mp3",
        p10: "",
        p25: "./Audio/Astro25.mp3",
        p40: "./Audio/Astro50.mp3",
        p60: "./Audio/Astro100.mp3",
        p80: "",
        p100: ""
    },
    {
        Select: "./Audio/TeemoSelect.mp3",
        p25: "./Audio/Teemo25.mp3",
        p40: "./Audio/Teemo50.mp3",
        p60: "./Audio/Teemo100.mp3",
        p80: "",
        p100: ""
    }
];
