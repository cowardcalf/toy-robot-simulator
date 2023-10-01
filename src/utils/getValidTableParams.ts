import {
  TABLE_DEFAULT_PARAMS,
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

const getValidValue = (max: number, min: number, value: number) => {
  return !isNil(value) ? value : Math.min(Math.max(min, value), max);
};

// Return the default params if not available.
// Limit the values into their limits ranges.
const getValidTableParams = (props: TableProps) => {
  const result: TableProps = TABLE_DEFAULT_PARAMS;
  const { width, height, rows, columns } = props;
  result.width = getValidValue(TABLE_MAX_WIDTH, TABLE_MIN_WIDTH, width);
  result.height = getValidValue(TABLE_MAX_HEIGHT, TABLE_MIN_HEIGHT, height);
  result.rows = getValidValue(TABLE_MAX_ROWS, TABLE_MIN_ROWS, rows);
  result.columns = getValidValue(TABLE_MAX_COLS, TABLE_MIN_COLS, columns);
  return result;
};

export default getValidTableParams;
