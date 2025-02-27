import { startGame, handleUserClick } from "./gameLogic.js";
import { toggleUIBasedOnMode } from "./ui.js";

// Initialize high score display
const savedHighScore = parseInt(localStorage.getItem("highScore")) || 0;
document.getElementById("high-score-text").textContent = `High Score: ${savedHighScore}`;

document.getElementById("start-btn").addEventListener("click", () => {
    console.log("Start button clicked");
    startGame();
});
document.getElementById("mode-select").addEventListener("change", toggleUIBasedOnMode);

// Set initial UI state
toggleUIBasedOnMode();

document.querySelectorAll(".simon-btn").forEach(button => {
    button.addEventListener("click", handleUserClick);
});
