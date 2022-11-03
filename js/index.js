
let lastRenderTime = 0;

const SNAKE_SPEED = 10;
const stage = document.getElementById("stage");

const snake = [{ x: 11, y: 11 }];
const moveDirection = { x: 0, y: 0 };


window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (moveDirection.y === 1) return;
      moveDirection.x = 0;
      moveDirection.y = -1;
      break;
    case "ArrowRight":
      if (moveDirection.x === -1) return;
      moveDirection.x = 1;
      moveDirection.y = 0;
      break;
    case "ArrowLeft":
      if (moveDirection.x === 1) return;
      moveDirection.x = -1;
      moveDirection.y = 0;
      break;
    case "ArrowDown":
      if (moveDirection.y === -1) return;
      moveDirection.x = 0;
      moveDirection.y = 1;
      break;
  }
})

export const swapToTheOtherSideOfTheScreen = () => {
  if (snake[0].x < 0) snake[0].x = 22;
  if (snake[0].x > 22) snake[0].x = 0;
  if (snake[0].y < 0) snake[0].y = 22;
  if (snake[0].y > 22) snake[0].y = 0;
}

export const moveSnake = () => {
  const moveBody = () => {
    for (let i = snake.length - 2; i >= 0; i--) {
      snake[i + 1] = { ...snake[i] };
    };
  }

  const moveHead = () => {
    snake[0].x += moveDirection.x;
    snake[0].y += moveDirection.y;
  }

  moveBody();
  moveHead();
  swapToTheOtherSideOfTheScreen();
}

export const drawSnake = (stage) => {
  snake.forEach(segment => {
    const snakeBlock = document.createElement('div');
    snakeBlock.style.gridRowStart = segment.y;
    snakeBlock.style.gridColumnStart = segment.x;
    snakeBlock.classList.add('snake');

    stage.appendChild(snakeBlock);
  });
}

const main = (currentTime) => {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  stage.innerHTML = '';
  moveSnake();
  drawSnake(stage);
}

window.requestAnimationFrame(main);