import styled from "styled-components";
import { BORDER_COLOR } from "../constants/colors";

const TableCell = styled.div`
  min-width: 10px;
  min-height: 10px;
  border-right: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};

  &:last-of-type {
    border: 0;
  }
`;

const TableCellLastColumn = styled(TableCell)`
  border-right: 0;
`;

const TableCellLastRow = styled(TableCell)`
  border-bottom: 0;
`;

export default TableCell;

export { TableCellLastColumn, TableCellLastRow };
