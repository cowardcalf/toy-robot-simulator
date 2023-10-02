import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "../../components/Item";
import avatar from "../../imgs/treasure-chest.png";
import { getCellSize, getShowTreasure, getTreasurePosition } from "./selectors";

// Override to not animating the translate
const TreasureItem = styled(Item)`
  transition: scale 500ms;
`;

const Treasure = () => {
  const { width, height } = useSelector(getCellSize);
  const { x, y } = useSelector(getTreasurePosition);
  const show = useSelector(getShowTreasure);
  const [scale, setScale] = useState(0);

  // Animate to show the treasure when x, y changing
  useEffect(() => {
    if (show) {
      setScale(1);
    } else {
      setScale(0);
    }
  }, [show]);

  return (
    <TreasureItem
      $width={width}
      $height={height}
      $avatar={avatar}
      $x={x}
      $y={y}
      $scale={scale}
    />
  );
};

export default Treasure;
