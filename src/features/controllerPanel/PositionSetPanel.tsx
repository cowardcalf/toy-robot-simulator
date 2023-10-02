import { isNil } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import PositionControlContainer from "../../components/PositionControlContainer";
import PositionInput from "../../components/PositionInput";
import PositionSetButton from "../../components/PositionSetButton";
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
        min={0}
        max={tableProps.columns}
        placeholder="X"
        onChange={setX}
      />
      <PositionInput
        value={y}
        min={0}
        max={tableProps.rows}
        placeholder="Y"
        onChange={setY}
      />
      <PositionSetButton onClick={onSet} />
    </PositionControlContainer>
  );
};

export default PositionSetPanel;
