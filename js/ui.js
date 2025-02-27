import { getCurrentMode } from "./modes.js";
// Function to update the score display
export function updateScore(score) {
    if (getCurrentMode() === "levels") return; // Do not update score in levels mode
    document.getElementById("score-text").textContent = `Score: ${score}`; // Update score text
}

// Function to update the high score display
export function updateHighScore(score) {
    if (getCurrentMode() === "levels") return; // Do not update high score in levels mode
    let highScore = localStorage.getItem("highScore") || 0; // Get the current high score
    if (score > highScore) {
        localStorage.setItem("highScore", score); // Update high score in local storage
        document.getElementById("high-score-text").textContent = `High Score: ${score}`; // Update high score display
        winning();
    }
}

// Function to update the level display
export function updateLevel(level) {
    document.getElementById("level-text").textContent = `Level: ${level}`; // Update level text
}

// Function to toggle UI elements based on the selected mode
export function toggleUIBasedOnMode() {
    let mode = getCurrentMode(); // Get the current mode
    let scoreText = document.getElementById("score-text");
    let highScoreText = document.getElementById("high-score-text");
    let levelText = document.getElementById("level-text");

    // Show/hide elements based on the selected mode
    if (mode === "levels") {
        scoreText.style.display = "none"; // Hide score in levels mode
        highScoreText.style.display = "none"; // Hide high score in levels mode
        levelText.style.display = "block"; // Show level in levels mode
    } else {
        scoreText.style.display = "block"; // Show score in high score mode
        highScoreText.style.display = "block"; // Show high score in high score mode
        levelText.style.display = "none"; // Hide level in high score mode
    }
}

// Function to show the game over screen
export function showGameOver() {
    console.log("Game Over function called"); // Debug log
    document.getElementById("level-title").textContent = "Game Over! Press Start to Play Again";
    
    // Play game over sound
    playGameOverSound();
    
    // Flash the screen red
    document.body.classList.add("flash-red");
    
    // Remove the flash effect after a short duration
    setTimeout(() => {
        document.body.classList.remove("flash-red");
    }, 2000); // Flash for 2 seconds
}

// Function to play the game over sound
function playGameOverSound() {
    const sound = new Audio('sounds/game-over.mp3'); // Load the game over sound
    sound.play(); // Play the game over sound
}
function winning() {
    const sound = new Audio('sounds/winning.mp3'); // Load the winning sound
    sound.play(); // Play the winning sound
         // Add flash effect
         const flashOverlay = document.querySelector('.win-flash');
         flashOverlay.style.display = 'block';
         // Remove flash effect after animation
          setTimeout(() => {
             flashOverlay.style.display = 'none';
              }, 500);
}
