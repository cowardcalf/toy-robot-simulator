import Direction from "../../types/Direction";
import tableReducer, {
  TableState,
  setGrids,
  setRobotPosition,
  moveRobot
} from "./tableSlice";

describe("table reducer", () => {
  const initialState: TableState = {
    width: 400,
    height: 400,
    rows: 5,
    columns: 5,
    status: ""
  };

  describe("setGrids tests", () => {
    describe("setGrids invalid cases", () => {
      test("setGrids rows should not smaller than the minimum", () => {
        const expectedStatus = "Error: invalid rows(-1) or columns(1)";
        const actual = tableReducer(
          initialState,
          setGrids({ rows: -1, columns: 1 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setGrids rows should not larger thanthe maximum", () => {
        const expectedStatus = "Error: invalid rows(11) or columns(1)";
        const actual = tableReducer(
          initialState,
          setGrids({ rows: 11, columns: 1 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setGrids columns should not smaller than the minimum", () => {
        const expectedStatus = "Error: invalid rows(1) or columns(-1)";
        const actual = tableReducer(
          initialState,
          setGrids({ rows: 1, columns: -1 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setGrids columns should not larger than the maximum", () => {
        const expectedStatus = "Error: invalid rows(0) or columns(11)";
        const actual = tableReducer(
          initialState,
          setGrids({ rows: 0, columns: 11 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
    });
    test("setGrids should update valid rows and columns properly", () => {
      const expectedStatus =
        "Status: table has been set to 4 rows and 6 columns";
      const actual = tableReducer(
        initialState,
        setGrids({ rows: 4, columns: 6 })
      );
      expect(actual.rows).toEqual(4);
      expect(actual.columns).toEqual(6);
      expect(actual.status).toEqual(expectedStatus);
    });
  });

  describe("setRobotPosition tests", () => {
    describe("setRobotPosition invalid cases", () => {
      test("setRobotPosition x should not smaller than 0", () => {
        const expectedStatus = "Error: invalid position X(-1) or Y(3)";
        const actual = tableReducer(
          initialState,
          setRobotPosition({ x: -1, y: 3 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setRobotPosition x should not larger than or equal to the maximum rows", () => {
        const expectedStatus = "Error: invalid position X(5) or Y(3)";
        const actual = tableReducer(
          initialState,
          setRobotPosition({ x: 5, y: 3 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setRobotPosition y should not smaller than 0", () => {
        const expectedStatus = "Error: invalid position X(3) or Y(-1)";
        const actual = tableReducer(
          initialState,
          setRobotPosition({ x: 3, y: -1 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
      test("setRobotPosition y should not larger than or equal to the maximum columns", () => {
        const expectedStatus = "Error: invalid position X(3) or Y(5)";
        const actual = tableReducer(
          initialState,
          setRobotPosition({ x: 3, y: 5 })
        );
        expect(actual.status).toEqual(expectedStatus);
      });
    });
    test("setRobotPosition should update valid x and y properly", () => {
      const expectedStatus = "Status: robot has been set to X:1 and Y:2";
      const actual = tableReducer(
        initialState,
        setRobotPosition({ x: 1, y: 2 })
      );
      expect(actual.robotX).toEqual(1);
      expect(actual.robotY).toEqual(2);
      expect(actual.status).toEqual(expectedStatus);
    });
  });

  describe("moveRobot tests", () => {
    describe("moveRobot invalid cases", () => {
      test("moveRobot should show error if the robot hasn't been set", () => {
        const expectedStatus = "Error: the robot has not been set on the table";
        const actual = tableReducer(initialState, moveRobot(Direction.RIGHT));
        expect(actual.status).toEqual(expectedStatus);
      });

      describe("moveRobot moving out cases", () => {
        const robotTopLeftState = Object.assign(
          { robotX: 0, robotY: 0 },
          initialState
        );

        test("moveRobot should not move beyond left edge", () => {
          const expectedStatus = "Error: the robot cannot move Left";
          const actual = tableReducer(
            robotTopLeftState,
            moveRobot(Direction.LEFT)
          );
          expect(actual.status).toEqual(expectedStatus);
        });

        test("moveRobot should not move beyond top edge", () => {
          const expectedStatus = "Error: the robot cannot move Up";
          const actual = tableReducer(
            robotTopLeftState,
            moveRobot(Direction.UP)
          );
          expect(actual.status).toEqual(expectedStatus);
        });

        const robotBottomRightState = Object.assign(
          { robotX: 0, robotY: 0 },
          initialState
        );

        test("moveRobot should not move beyond right edge", () => {
          const expectedStatus = "Error: the robot cannot move Right";
          const actual = tableReducer(
            robotBottomRightState,
            moveRobot(Direction.RIGHT)
          );
          expect(actual.status).toEqual(expectedStatus);
        });

        test("moveRobot should not move beyond bottom edge", () => {
          const expectedStatus = "Error: the robot cannot move Down";
          const actual = tableReducer(
            robotBottomRightState,
            moveRobot(Direction.DOWN)
          );
          expect(actual.status).toEqual(expectedStatus);
        });
      });
    });

    describe("moveRobot valid cases ", () => {
      const robotSetState = Object.assign(
        { robotX: 2, robotY: 2 },
        initialState
      );
      test("moveRobot should move left properly", () => {
        const expectedStatus = "Status: the robot has moved Left";
        const actual = tableReducer(robotSetState, moveRobot(Direction.LEFT));
        expect(actual.status).toEqual(expectedStatus);
        expect(actual.robotX).toEqual(1);
        expect(actual.robotY).toEqual(2);
      });
      test("moveRobot should move right properly", () => {
        const expectedStatus = "Status: the robot has moved Right";
        const actual = tableReducer(robotSetState, moveRobot(Direction.RIGHT));
        expect(actual.status).toEqual(expectedStatus);
        expect(actual.robotX).toEqual(3);
        expect(actual.robotY).toEqual(2);
      });
      test("moveRobot should move up properly", () => {
        const expectedStatus = "Status: the robot has moved Up";
        const actual = tableReducer(robotSetState, moveRobot(Direction.UP));
        expect(actual.status).toEqual(expectedStatus);
        expect(actual.robotX).toEqual(2);
        expect(actual.robotY).toEqual(1);
      });
      test("moveRobot should move down properly", () => {
        const expectedStatus = "Status: the robot has moved Down";
        const actual = tableReducer(robotSetState, moveRobot(Direction.DOWN));
        expect(actual.status).toEqual(expectedStatus);
        expect(actual.robotX).toEqual(2);
        expect(actual.robotY).toEqual(3);
      });
    });
  });
});
