import { useSelector } from "react-redux";
import Item from "../../components/Item";
import {
  getCellSize,
  getRobotPosition,
  getShowTreasure,
  getTreasurePosition
} from "./selectors";
import avatar from "../../imgs/robot-assistant.png";
import { isNil } from "lodash";

const Robot = () => {
  const cellSize = useSelector(getCellSize);
  const robotPosition = useSelector(getRobotPosition);
  const showTreasure = useSelector(getShowTreasure);
  const treasurePosition = useSelector(getTreasurePosition);

  // TODO: bounce animation when moving out.

  /* Don't show robot if it is not set */
  return isNil(robotPosition.x) || isNil(robotPosition.y) ? null : (
    <Item
      $avatar={avatar}
      $width={cellSize.width}
      $height={cellSize.height}
      $x={robotPosition.x}
      $y={robotPosition.y}
      $blink={
        !showTreasure &&
        !isNil(treasurePosition.x) &&
        !isNil(treasurePosition.y)
      }
    />
  );
};

export default Robot;
