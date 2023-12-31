import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
import { TABLE_DEFAULT_PARAMS } from "../../constants/tableLimits";
import generateTreasure from "./utils/generateTreasure";

export interface TableState {
  width: number;
  height: number;
  rows: number;
  columns: number;
  robotX?: number;
  robotY?: number;
  invalidMove?: Direction;
  status: string;
  treasureX?: number;
  treasureY?: number;
  showTreasure: boolean;
}

const initialState: TableState = Object.assign(
  {
    robotX: undefined,
    robotY: undefined,
    status: "",
    showTreasure: false
  },
  TABLE_DEFAULT_PARAMS
);

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

      // Spawn the treasure if this is the first setting robot
      if (isNil(state.robotX) || isNil(state.robotY)) {
        const treasurePos = generateTreasure(x, y, state.rows, state.columns);
        state.treasureX = treasurePos.x;
        state.treasureY = treasurePos.y;
        state.showTreasure = true;
      }

      // Update the robot
      state.robotX = x;
      state.robotY = y;
      state.status = STATUS_POSITION_SET(x, y);
    },
    moveRobot: (state, action: PayloadAction<Direction>) => {
      if (isNil(state.robotX) || isNil(state.robotY)) {
        state.status = ERROR_ROBOT_HAS_NOT_BEEN_SET;
        return state;
      }
      const direction = action.payload;
      const newPos = getRobotNewPosition(state.robotX, state.robotY, direction);
      if (!isPositionValid(newPos.x, newPos.y, state.rows, state.columns)) {
        console.log(
          `moveRobot : position invalid : newPos.x: ${newPos.x}, newPos.y: ${newPos.y}, state.rows: ${state.rows}, state.columns: ${state.rows}`
        );
        state.status = ERROR_ROBOT_MOVE(direction);
        state.invalidMove = direction;
        return state;
      }
      state.invalidMove = undefined;
      state.robotX = newPos.x;
      state.robotY = newPos.y;
      state.status = STATUS_ROBOT_HAS_MOVED(direction);

      // Check if get treasure
      if (newPos.x === state.treasureX && newPos.y === state.treasureY) {
        // Don't update the position to avoid jumping animation
        // state.treasureX = undefined;
        // state.treasureY = undefined;
        state.showTreasure = false;
      }
    }
  }
});

const tableReducer = tableSlice.reducer;

export const { setGrids, setRobotPosition, moveRobot } = tableSlice.actions;

export default tableReducer;
