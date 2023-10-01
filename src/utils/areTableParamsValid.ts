import {
  TABLE_MAX_COLS,
  TABLE_MAX_HEIGHT,
  TABLE_MAX_ROWS,
  TABLE_MAX_WIDTH,
  TABLE_MIN_COLS,
  TABLE_MIN_HEIGHT,
  TABLE_MIN_ROWS,
  TABLE_MIN_WIDTH
} from "../constants/tableLimits";
import { TableProps } from "../types/TableProps";
import { isNil } from "lodash";

const areTableParamsValid = (props: TableProps) => {
  const { width, height, rows, columns } = props;
  return (
    !isNil(width) &&
    !isNil(height) &&
    !isNil(rows) &&
    !isNil(columns) &&
    width <= TABLE_MAX_WIDTH &&
    width >= TABLE_MIN_WIDTH &&
    height <= TABLE_MAX_HEIGHT &&
    height >= TABLE_MIN_HEIGHT &&
    rows <= TABLE_MAX_ROWS &&
    rows <= TABLE_MIN_ROWS &&
    columns <= TABLE_MAX_COLS &&
    columns <= TABLE_MIN_COLS
  );
};

export default areTableParamsValid;
