import { useAppDispatch } from "../../app/hooks";
import NaviButton from "../../components/NaviButton";
import ButtonsContainer from "../../components/ButtonsContainer";
import Direction from "../../types/Direction";
import { moveRobot } from "../table/tableSlice";
import { useCallback, useMemo } from "react";

const NavigationPanel = () => {
  const dispatch = useAppDispatch();
  const moveFunc = useCallback(
    (d: Direction) => {
      dispatch(moveRobot(d));
    },
    [dispatch]
  );
  // Use useMemo to avoid re-generate the components
  const buttons = useMemo(() => {
    return Object.values(Direction).map((d) => (
      <NaviButton key={d} direction={d} moveFunc={moveFunc} />
    ));
  }, [moveFunc]);

  return <ButtonsContainer>{buttons}</ButtonsContainer>;
};

export default NavigationPanel;
