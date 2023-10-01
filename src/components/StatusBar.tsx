import styled from "styled-components";
import { BORDER_COLOR } from "../constants/colors";

const StatusBarDiv = styled.div`
  border: 1px solid ${BORDER_COLOR};
  min-width: 20em;
  padding: 1em 1em;
  border-radius: 5px;
  width: 100%;
`;

type StatusBarProps = {
  statusText?: string;
};

const StatusBar = ({ statusText = "" }: StatusBarProps) => (
  <StatusBarDiv>{`Status: ${statusText}`}</StatusBarDiv>
);

export default StatusBar;
