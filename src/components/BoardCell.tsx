import styled from "styled-components";
import { BORDER_COLOR } from "../constants/colors";

const BoardCell = styled.div`
  min-width: 10px;
  min-height: 10px;
  border-right: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};

  &:last-of-type {
    border: 0;
  }
`;

const BoardCellLastColumn = styled(BoardCell)`
  border-right: 0;
`;

const BoardCellLastRow = styled(BoardCell)`
  border-bottom: 0;
`;

export default BoardCell;

export { BoardCellLastColumn, BoardCellLastRow };
