import { useSelector } from "react-redux";
import { getTableStatus } from "../features/table/selectors";
import StyledStatusBar from "./StyledStatusBar";

const StatusBar = () => {
  const status = useSelector(getTableStatus);
  return <StyledStatusBar>{status}</StyledStatusBar>;
};

export default StatusBar;
