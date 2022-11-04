import { drawFood, handleGetFood } from "./food.js";
import { getMoveDirection } from "./input.js";
import { initializateScoreboard, updateHighScore } from "./score.js";
import { snakeSpeed, drawSnake, move as moveSnake, hasCollided } from "./snake.js";

let lastRenderTime = 0;
let gameOver = false;

const stage = document.getElementById("stage");

const showGameOver = () => {
  const gameOverElement = document.getElementById('game-over');
  gameOverElement.classList.remove("hidden");
}

const clearScreen = () => {
  return stage.innerHTML = '';
}

const main = (currentTime) => {
  if (gameOver) {
    updateHighScore();
    showGameOver();
    return;
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  lastRenderTime = currentTime;

  clearScreen();

  moveSnake(getMoveDirection());

  gameOver = hasCollided();

  drawSnake(stage);
  drawFood(stage);
  handleGetFood();
}

initializateScoreboard();
window.requestAnimationFrame(main);