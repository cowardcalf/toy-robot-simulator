import styled from "styled-components";
import StyledButton from "./StyledButton";

const StyledPositionSetButton = styled(StyledButton)`
  flex: 1;
  min-width: 15em;
`;

type PositionSetButtonProps = {
  onClick: () => void;
};

const PositionSetButton = ({ onClick }: PositionSetButtonProps) => {
  return (
    <StyledPositionSetButton onClick={onClick}>
      Set position
    </StyledPositionSetButton>
  );
};

export default PositionSetButton;
