import Direction from "../types/Direction";
import StyledButton from "./StyledButton";

type NaviButtonProps = {
  direction: Direction;
  moveFunc: (d: Direction) => void;
};

const NaviButton = ({ direction, moveFunc }: NaviButtonProps) => {
  function onClick() {
    moveFunc(direction);
  }
  return <StyledButton onClick={onClick}>{direction}</StyledButton>;
};

export default NaviButton;
