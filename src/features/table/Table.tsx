import TableView from "../../components/TableView";
import Robot from "../../components/Robot";
import avatar from "../../imgs/robot-assistant.png";
import { TableProps } from "../../types/TableProps";
import getValidTableParams from "../../utils/getValidTableParams";
import TableWrapper from "../../components/TableWrapper";

// TODO: may need to round the size
const getCellSize = ({ width, height, rows, columns }: TableProps) => {
  return { width: width / rows, height: height / columns };
};

const Table = (props: TableProps) => {
  const validParams = getValidTableParams(props);
  const cellSize = getCellSize(validParams);

  return (
    <TableWrapper>
      <Robot
        avatar={avatar}
        width={cellSize.width}
        height={cellSize.height}
        x={3}
        y={4}
      />
      <TableView {...props} />
    </TableWrapper>
  );
};

export default Table;
