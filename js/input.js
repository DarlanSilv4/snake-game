const direction = { x: 0, y: 0 };
const lastDirection = { x: 0, y: 0 };

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (lastDirection.y === 1) return;
      direction.x = 0;
      direction.y = -1;
      break;
    case "ArrowRight":
      if (lastDirection.x === -1) return;
      direction.x = 1;
      direction.y = 0;
      break;
    case "ArrowLeft":
      if (lastDirection.x === 1) return;
      direction.x = -1;
      direction.y = 0;
      break;
    case "ArrowDown":
      if (lastDirection.y === -1) return;
      direction.x = 0;
      direction.y = 1;
      break;
  }
});

export const getMoveDirection = () => {
  lastDirection.x = direction.x;
  lastDirection.y = direction.y;

  return direction;
}
