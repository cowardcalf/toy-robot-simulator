import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import areGridsValid from "./utils/areGridsValid";
import isPositionValid from "./utils/isPositionValid";
import {
  ERROR_INVALID_GRIDS,
  ERROR_INVALID_POSITION_SET,
  ERROR_ROBOT_HAS_NOT_BEEN_SET,
  ERROR_ROBOT_MOVE,
  STATUS_GRIDS_SET,
  STATUS_POSITION_SET,
  STATUS_ROBOT_HAS_MOVED
} from "../../constants/messages";
import Direction from "../../types/Direction";
import getRobotNewPosition from "./utils/getRobotNewPosition";
import { isNil } from "lodash";

export interface TableState {
  rows: number;
  columns: number;
  robotX?: number;
  robotY?: number;
  status: string;
}

const initialState: TableState = {
  rows: 5,
  columns: 5,
  robotX: undefined,
  robotY: undefined,
  status: ""
};

// const clearStatus = (state: TableState) => (state.status = "");

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setGrids: (
      state,
      action: PayloadAction<{ rows: number; columns: number }>
    ) => {
      const { rows, columns } = action.payload;
      if (!areGridsValid(rows, columns)) {
        state.status = ERROR_INVALID_GRIDS(rows, columns);
        return state;
      }
      state.rows = rows;
      state.columns = columns;
      state.status = STATUS_GRIDS_SET(rows, columns);
    },
    setRobotPosition: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      const { x, y } = action.payload;
      if (!isPositionValid(x, y, state.rows, state.columns)) {
        state.status = ERROR_INVALID_POSITION_SET(x, y);
        return state;
      }
      state.robotX = x;
      state.robotY = y;
      state.status = STATUS_POSITION_SET(x, y);
    },
    moveRobot: (state, action: PayloadAction<{ direction: Direction }>) => {
      if (isNil(state.robotX) || isNil(state.robotY)) {
        state.status = ERROR_ROBOT_HAS_NOT_BEEN_SET;
        return state;
      }
      const { direction } = action.payload;
      const newPos = getRobotNewPosition(state.robotX, state.robotY, direction);
      if (!isPositionValid(newPos.x, newPos.y, state.rows, state.columns)) {
        state.status = ERROR_ROBOT_MOVE(direction);
        return state;
      }
      state.robotX = newPos.x;
      state.robotY = newPos.y;
      state.status = STATUS_ROBOT_HAS_MOVED(direction);
    }
  }
});

const tableReducer = tableSlice.reducer;

export const { setGrids, setRobotPosition, moveRobot } = tableSlice.actions;

// Selectors
export const getRobotPosition = (state: RootState) => ({
  x: state.table.robotX,
  y: state.table.robotY
});

export default tableReducer;
