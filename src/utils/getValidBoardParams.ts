import {
  BOARD_DEFAULT_PARAMS,
  BOARD_MAX_COLS,
  BOARD_MAX_HEIGHT,
  BOARD_MAX_ROWS,
  BOARD_MAX_WIDTH,
  BOARD_MIN_COLS,
  BOARD_MIN_HEIGHT,
  BOARD_MIN_ROWS,
  BOARD_MIN_WIDTH
} from "../constants/boardLimits";
import { BoardProps } from "../types/BoardProps";
import { isNil } from "lodash";

const getValidValue = (max: number, min: number, value: number) => {
  return !isNil(value) ? value : Math.min(Math.max(min, value), max);
};

// Return the default params if not available.
// Limit the values into their limits ranges.
const getValidBoardParams = (props: BoardProps) => {
  const result: BoardProps = BOARD_DEFAULT_PARAMS;
  const { width, height, rows, columns } = props;
  result.width = getValidValue(BOARD_MAX_WIDTH, BOARD_MIN_WIDTH, width);
  result.height = getValidValue(BOARD_MAX_HEIGHT, BOARD_MIN_HEIGHT, height);
  result.rows = getValidValue(BOARD_MAX_ROWS, BOARD_MIN_ROWS, rows);
  result.columns = getValidValue(BOARD_MAX_COLS, BOARD_MIN_COLS, columns);
  return result;
};

export default getValidBoardParams;
