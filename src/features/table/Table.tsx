import { useSelector } from "react-redux";
import TableView from "../../components/TableView";
import TableWrapper from "../../components/TableWrapper";
import Robot from "./Robot";
import Treasure from "./Treasure";
import { getTableProps } from "./selectors";

const Table = () => {
  const tableProps = useSelector(getTableProps);

  return (
    <TableWrapper>
      <Treasure />
      <Robot />
      <TableView {...tableProps} />
    </TableWrapper>
  );
};

export default Table;
