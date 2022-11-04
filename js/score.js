export let score = 0;
let highScore = parseInt(window.localStorage.getItem("high-score")) || 0;

const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');

const getFormattedScore = (score) => {
  return String(score).padStart(9, "0");
}

export const initializateScoreboard = () => {
  scoreElement.innerHTML = getFormattedScore(score);
  highScoreElement.innerHTML = getFormattedScore(highScore);
}

export const increaseScore = (points = 1) => {
  score += points;
  scoreElement.innerHTML = getFormattedScore(score);
}

export const updateHighScore = () => {
  if (score > highScore)
    window.localStorage.setItem("high-score", score);
}