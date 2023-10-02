import Direction from "../types/Direction";

const STATUS_PREFIX = "Status: ";
const ERROR_PREFIX = "Error: ";

const STATUS_GRIDS_SET = (rows: number, cols: number) =>
  `${STATUS_PREFIX}table has been set to ${rows} rows and ${cols} columns`;

const ERROR_INVALID_GRIDS = (rows: number, cols: number) =>
  `${ERROR_PREFIX}invalid rows(${rows}) or columns(${cols})`;

const STATUS_POSITION_SET = (x: number, y: number) =>
  `${STATUS_PREFIX}robot has been set to X:${x} and Y:${y}`;

const ERROR_INVALID_POSITION_SET = (x: number, y: number) =>
  `${ERROR_PREFIX}invalid position X(${x}) or Y(${y})`;

const ERROR_ROBOT_HAS_NOT_BEEN_SET = `${ERROR_PREFIX}the robot has not been set on the table`;

const ERROR_ROBOT_MOVE = (direction: Direction) =>
  `${ERROR_PREFIX}the robot cannot move ${direction}`;

const STATUS_ROBOT_HAS_MOVED = (direction: Direction) =>
  `${STATUS_PREFIX}the robot has moved ${direction}`;

export {
  STATUS_GRIDS_SET,
  ERROR_INVALID_GRIDS,
  STATUS_POSITION_SET,
  ERROR_INVALID_POSITION_SET,
  ERROR_ROBOT_HAS_NOT_BEEN_SET,
  ERROR_ROBOT_MOVE,
  STATUS_ROBOT_HAS_MOVED
};
