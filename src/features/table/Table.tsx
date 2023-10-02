import TableView from "../../components/TableView";
import Item from "../../components/Item";
import avatar from "../../imgs/robot-assistant.png";
import TableWrapper from "../../components/TableWrapper";
import { useSelector } from "react-redux";
import { getCellSize, getRobotPosition, getTableProps } from "./selectors";
import { isNil } from "lodash";
import Treasure from "./Treasure";

const Table = () => {
  const tableProps = useSelector(getTableProps);
  const cellSize = useSelector(getCellSize);
  const robotPosition = useSelector(getRobotPosition);

  return (
    <TableWrapper>
      <Treasure />
      {/* Don't show robot if it is not set */}
      {isNil(robotPosition.x) || isNil(robotPosition.y) ? null : (
        <Item
          $avatar={avatar}
          $width={cellSize.width}
          $height={cellSize.height}
          $x={robotPosition.x}
          $y={robotPosition.y}
        />
      )}
      <TableView {...tableProps} />
    </TableWrapper>
  );
};

export default Table;
