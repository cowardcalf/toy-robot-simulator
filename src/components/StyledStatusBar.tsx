import styled from "styled-components";
import { BORDER_COLOR } from "../constants/colors";

const StyledStatusBar = styled.div`
  border: 1px solid ${BORDER_COLOR};
  min-width: 20em;
  min-height: 3.5em;
  padding: 1em 1em;
  border-radius: 5px;
  width: 100%;
`;

export default StyledStatusBar;
