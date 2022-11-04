import { increaseScore } from "./score.js";
import { increaseSnake, increaseSnakeSpeed, onSnakeHead } from "./snake.js";

const getRandomNumber = () => Math.floor(Math.random() * (22 - 1)) + 1;
const getRandomPosition = () => { return { x: getRandomNumber(), y: getRandomNumber() } };

let food = getRandomPosition();

export const handleGetFood = () => {
  if (!onSnakeHead(food)) return;

  increaseSnake();
  increaseScore();
  increaseSnakeSpeed();

  food = getRandomPosition();
}

export const drawFood = (stage) => {
  const foodBlock = document.createElement('div');
  foodBlock.style.gridRowStart = food.y;
  foodBlock.style.gridColumnStart = food.x;
  foodBlock.classList.add('food');

  stage.appendChild(foodBlock);
}