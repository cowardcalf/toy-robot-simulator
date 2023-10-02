import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    scale: 0
  }
  100% {
    scale: 1
  }
`;

const Item = styled.div<{
  $width: number;
  $height: number;
  $avatar: string;
  $x?: number;
  $y?: number;
  $scale?: number;
  $blink?: boolean;
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
  translate: ${(props) => (props.$x ? props.$x * props.$width : 0)}px
    ${(props) => (props.$y ? props.$y * props.$height : 0)}px;
  scale: ${(props) => (props.$scale === undefined ? 1 : props.$scale)};
  z-index: 1;
  transition:
    translate 500ms,
    scale 500ms;
  animation: ${(props) => (props.$blink ? blinkAnimation : "none")} 300ms 3;
  animation-delay: 500ms;
`;

export default Item;
