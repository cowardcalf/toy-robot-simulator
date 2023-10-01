import styled from "styled-components";
import { BORDER_COLOR } from "../constants/colors";

const StyledButton = styled.button`
  min-width: 8em;
  min-height: 3em;
  background-color: transparent;
  border-radius: 5px;
  border-color: ${BORDER_COLOR};

  cursor: pointer;
`;

export default StyledButton;
