// Check if setting position is in current range.
// the max rows / cols are lengths, x / y (zero index based) should not equal to the max.
const isPositionValid = (
  x: number,
  y: number,
  maxRows: number,
  maxCols: number
) => {
  return y >= 0 && y < maxRows && x >= 0 && x < maxCols;
};

export default isPositionValid;
