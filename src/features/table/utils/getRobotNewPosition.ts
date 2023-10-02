import Direction from "../../../types/Direction";

const getRobotNewPosition = (x: number, y: number, direction: Direction) => {
  let newX = x;
  let newY = y;
  switch (direction) {
    case Direction.UP:
      newY -= 1;
      break;
    case Direction.DOWN:
      newY += 1;
      break;
    case Direction.LEFT:
      newX -= 1;
      break;
    case Direction.RIGHT:
      newX += 1;
      break;
    default:
      break;
  }
  return { x: newX, y: newY };
};

export default getRobotNewPosition;
