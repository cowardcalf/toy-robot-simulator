import { RootState } from "../../app/store";
import {
  getCellSize,
  getRobotPosition,
  getTableProps,
  getTreasurePosition
} from "./selectors";

describe("table store selectors tests", () => {
  const initialState: RootState = {
    table: {
      width: 400,
      height: 400,
      rows: 4,
      columns: 5,
      status: "Sample status",
      robotX: 2,
      robotY: 3,
      treasureX: 4,
      treasureY: 2,
      showTreasure: true
    }
  };
  test("getTableProps should return the { width, height, rows, columns }", () => {
    const expected = { width: 400, height: 400, rows: 4, columns: 5 };
    const actual = getTableProps(initialState);
    expect(actual).toEqual(expected);
  });

  test("getRobotPosition should return the { x, y }", () => {
    const expected = { x: 2, y: 3 };
    const actual = getRobotPosition(initialState);
    expect(actual).toEqual(expected);
  });

  test("getRobotPosition should return the { x, y }", () => {
    const expected = { x: 2, y: 3 };
    const actual = getRobotPosition(initialState);
    expect(actual).toEqual(expected);
  });

  test("getCellSize should return the cell's { width, height }", () => {
    const expected = { width: 80, height: 100 };
    const actual = getCellSize(initialState);
    expect(actual).toEqual(expected);
  });

  test("getTreasurePosition should return the { x, y }", () => {
    const expected = { x: 4, y: 2 };
    const actual = getTreasurePosition(initialState);
    expect(actual).toEqual(expected);
  });
});
