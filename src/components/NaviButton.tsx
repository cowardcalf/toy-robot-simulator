import Direction from "../types/Direction";
import StyledButton from "./StyledButton";

type NaviButtonProps = {
  direction: Direction;
  moveFunc: (d: Direction) => void;
};

const NaviButton = ({ direction, moveFunc }: NaviButtonProps) => {
  // useCallback to avoid re-generate the onClick function
  function onClick() {
    moveFunc(direction);
  }
  return <StyledButton onClick={onClick}>{direction}</StyledButton>;
};

export default NaviButton;
