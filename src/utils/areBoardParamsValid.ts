import {
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

const areBoardParamsValid = (props: BoardProps) => {
  const { width, height, rows, columns } = props;
  return (
    !isNil(width) &&
    !isNil(height) &&
    !isNil(rows) &&
    !isNil(columns) &&
    width <= BOARD_MAX_WIDTH &&
    width >= BOARD_MIN_WIDTH &&
    height <= BOARD_MAX_HEIGHT &&
    height >= BOARD_MIN_HEIGHT &&
    rows <= BOARD_MAX_ROWS &&
    rows <= BOARD_MIN_ROWS &&
    columns <= BOARD_MAX_COLS &&
    columns <= BOARD_MIN_COLS
  );
};

export default areBoardParamsValid;
