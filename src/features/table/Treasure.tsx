import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "../../components/Item";
import avatar from "../../imgs/treasure-chest.png";
import { getCellSize, getShowTreasure, getTreasurePosition } from "./selectors";

const TreasureItem = styled(Item)`
  left: ${(props) => (props.$x ? props.$x * props.$width : 0)}px;
  top: ${(props) => (props.$y ? props.$y * props.$height : 0)}px;
  transform: scale(
    ${(props) => (props.$scale === undefined ? 1 : props.$scale)}
  );
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
