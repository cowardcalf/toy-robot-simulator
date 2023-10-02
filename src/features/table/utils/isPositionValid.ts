import { TABLE_MIN_COLS, TABLE_MIN_ROWS } from "../constants/tableLimits";

// Check if setting position is in current range.
// the max rows / cols are lengths, x / y should not equal to that.
const isPositionValid = (
  x: number,
  y: number,
  maxRows: number,
  maxCols: number
) => {
  return (
    y >= TABLE_MIN_ROWS && y < maxRows && x >= TABLE_MIN_COLS && x < maxCols
  );
};

export default isPositionValid;
