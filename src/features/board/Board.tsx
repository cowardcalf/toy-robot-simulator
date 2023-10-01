import BoardView from "../../components/BoardView";
import Robot from "../../components/Robot";
import avatar from "../../imgs/robot-assistant.png";
import { BoardProps } from "../../types/BoardProps";
import getValidBoardParams from "../../utils/getValidBoardParams";
import BoardWrapper from "../../components/BoardWrapper";

// TODO: may need to round the size
const getCellSize = ({ width, height, rows, columns }: BoardProps) => {
  return { width: width / rows, height: height / columns };
};

const Board = (props: BoardProps) => {
  const validParams = getValidBoardParams(props);
  const cellSize = getCellSize(validParams);

  return (
    <BoardWrapper>
      <Robot
        avatar={avatar}
        width={cellSize.width}
        height={cellSize.height}
        x={3}
        y={4}
      />
      <BoardView {...props} />
    </BoardWrapper>
  );
};

export default Board;
