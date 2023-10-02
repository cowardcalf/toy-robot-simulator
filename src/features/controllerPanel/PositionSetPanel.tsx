import { isNil } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import PositionControlContainer from "../../components/PositionControlContainer";
import PositionInput from "../../components/PositionInput";
import PositionSetButton from "../../components/PositionSetButton";
import { TABLE_MIN_COLS, TABLE_MIN_ROWS } from "../../constants/tableLimits";
import { getRobotPosition, getTableProps } from "../table/selectors";
import { setRobotPosition } from "../table/tableSlice";

const PositionSetPanel = () => {
  const dispatch = useAppDispatch();
  const position = useSelector(getRobotPosition);
  const tableProps = useSelector(getTableProps);
  const [x, setX] = useState(position.x);
  const [y, setY] = useState(position.y);

  function onSet() {
    if (!isNil(x) && !isNil(y)) {
      dispatch(setRobotPosition({ x, y }));
    }
  }

  return (
    <PositionControlContainer>
      <PositionInput
        value={x}
        min={TABLE_MIN_COLS}
        max={tableProps.columns}
        placeholder="X"
        onChange={setX}
      />
      <PositionInput
        value={y}
        min={TABLE_MIN_ROWS}
        max={tableProps.rows}
        placeholder="Y"
        onChange={setY}
      />
      <PositionSetButton onClick={onSet} />
    </PositionControlContainer>
  );
};

export default PositionSetPanel;
