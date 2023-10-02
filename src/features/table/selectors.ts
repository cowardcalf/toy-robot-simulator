import { createSelector } from "reselect";
import { RootState } from "../../app/store";

const getTableWidth = (state: RootState) => state.table.width;
const getTableHeight = (state: RootState) => state.table.height;
const getTableRows = (state: RootState) => state.table.rows;
const getTableCols = (state: RootState) => state.table.columns;
const getRobotX = (state: RootState) => state.table.robotX;
const getRobotY = (state: RootState) => state.table.robotY;

export const getTableStatus = (state: RootState) => state.table.status;

// Reselector selectors
// Use reselector to avoid re-generate new object

// { width, height, rows, columns }
export const getTableProps = createSelector(
  getTableWidth,
  getTableHeight,
  getTableRows,
  getTableCols,
  (width, height, rows, columns) => ({ width, height, rows, columns })
);

// { x, y }
export const getRobotPosition = createSelector(
  getRobotX,
  getRobotY,
  (x, y) => ({ x, y })
);

// { width: total width / total columns, height: total height / total rows}
export const getCellSize = createSelector(
  getTableProps,
  ({ width, height, rows, columns }) => {
    // TODO: may need to round the size
    return { width: width / columns, height: height / rows };
  }
);
