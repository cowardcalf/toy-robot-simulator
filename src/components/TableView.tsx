import styled from "styled-components";
import TableCell, { TableCellLastColumn, TableCellLastRow } from "./TableCell";
import { memo } from "react";
import { TableProps } from "../types/TableProps";

const TableViewDiv = styled.div<{
  $rows: number;
  $columns: number;
  $width: number;
  $height: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  min-width: 300px;
  min-height: 300px;
  display: grid;
  background-color: #89a2cc;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.$rows}, 1fr);
  border: 1px solid #2d2e30;
  border-radius: 5px;
`;

const TableView = memo(({ rows, columns, width, height }: TableProps) => {
  return (
    <TableViewDiv
      $rows={rows}
      $columns={columns}
      $width={width}
      $height={height}
      title="tableView"
    >
      {Array.from({ length: rows })
        .map((_ri, rIndex) =>
          Array.from({ length: columns }).map((_ci, cIndex) => {
            const key = `${rIndex}-${cIndex}`;
            if (rIndex === rows - 1) {
              return <TableCellLastRow key={key} title="tableCell" />;
            }
            if (cIndex === columns - 1) {
              return <TableCellLastColumn key={key} title="tableCell" />;
            }
            return <TableCell key={key} title="tableCell" />;
          })
        )
        .flat()}
    </TableViewDiv>
  );
});

TableView.displayName = "TableView";

export default TableView;
