import styled from "styled-components";

const Item = styled.div<{
  $width: number;
  $height: number;
  $avatar: string;
  $x?: number;
  $y?: number;
  $scale?: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-image: url(${(props) => props.$avatar});
  background-size: 60% 60%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(
      ${(props) => (props.$x ? props.$x * props.$width : 0)}px,
      ${(props) => (props.$y ? props.$y * props.$height : 0)}px
    )
    scale(${(props) => (props.$scale === undefined ? 1 : props.$scale)});
  z-index: 1;
  transition: transform 500ms;
`;

export default Item;
