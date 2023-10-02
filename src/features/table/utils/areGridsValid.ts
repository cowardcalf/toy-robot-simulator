import {
  TABLE_MAX_COLS,
  TABLE_MAX_ROWS,
  TABLE_MIN_COLS,
  TABLE_MIN_ROWS
} from "../../../constants/tableLimits";

// Check if the columns and rows are in the range limits.
const areGridsValid = (rows: number, cols: number) => {
  return (
    rows >= TABLE_MIN_ROWS &&
    rows <= TABLE_MAX_ROWS &&
    cols >= TABLE_MIN_COLS &&
    cols <= TABLE_MAX_COLS
  );
};

export default areGridsValid;
