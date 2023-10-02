import ControllerContainer from "../../components/ControllerContainer";
import StatusBar from "../../components/StatusBar";
import NavigationPanel from "./NavigationPanel";
import PositionSetPanel from "./PositionSetPanel";

const ControllerPanel = () => {
  return (
    <ControllerContainer>
      <StatusBar />
      <NavigationPanel />
      <PositionSetPanel />
    </ControllerContainer>
  );
};

export default ControllerPanel;
