export let snakeSpeed = 5;

const snake = [{ x: 11, y: 11 }];

export const drawSnake = (stage) => {
  snake.forEach(segment => {
    const snakeBlock = document.createElement('div');
    snakeBlock.style.gridRowStart = segment.y;
    snakeBlock.style.gridColumnStart = segment.x;
    snakeBlock.classList.add('snake');

    stage.appendChild(snakeBlock);
  });
}

const getHead = () => {
  return snake[0];
}

export const increaseSnake = () => {
  const lastSnakeBlock = snake.length - 1;
  snake.push({ ...snake[lastSnakeBlock] });
}

export const onSnakeHead = (segment) => {
  const snakeHead = getHead();
  return JSON.stringify(snakeHead) === JSON.stringify(segment);
}

export const hasCollided = () => {
  let collision = false;

  snake.forEach((segment, index) => {
    if (index !== 0 && onSnakeHead(segment))
      collision = true;
  });

  return collision;
}

const swapToTheOtherSideOfTheScreen = () => {
  const snakeHead = getHead();

  if (snakeHead.x < 1) snakeHead.x = 22;
  if (snakeHead.x > 22) snakeHead.x = 1;
  if (snakeHead.y < 1) snakeHead.y = 22;
  if (snakeHead.y > 22) snakeHead.y = 1;
}


const moveBody = () => {
  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] };
  };
}

const moveHead = (direction) => {
  const snakeHead = getHead();

  snakeHead.x += direction.x;
  snakeHead.y += direction.y;
}

export const move = (direction) => {
  moveBody();
  moveHead(direction);
  swapToTheOtherSideOfTheScreen();
}
