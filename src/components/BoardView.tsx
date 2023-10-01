import styled from "styled-components";
import BoardCell, { BoardCellLastColumn, BoardCellLastRow } from "./BoardCell";
import { memo } from "react";
import { BoardProps } from "../types/BoardProps";

const BoardViewDiv = styled.div<{
  rows: number;
  columns: number;
  width: number;
  height: number;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  min-width: 300px;
  min-height: 300px;
  display: grid;
  background-color: #89a2cc;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  border: 1px solid #2d2e30;
  border-radius: 5px;
`;

const BoardView = memo(({ rows, columns, width, height }: BoardProps) => {
  return (
    <BoardViewDiv rows={rows} columns={columns} width={width} height={height}>
      {Array.from({ length: rows })
        .map((_ri, rIndex) =>
          Array.from({ length: columns }).map((_ci, cIndex) => {
            const key = `${rIndex}-${cIndex}`;
            if (rIndex === rows - 1) {
              return <BoardCellLastRow key={key} />;
            }
            if (cIndex === columns - 1) {
              return <BoardCellLastColumn key={key} />;
            }
            return <BoardCell key={key} />;
          })
        )
        .flat()}
    </BoardViewDiv>
  );
});

BoardView.displayName = "BoardView";

export default BoardView;
