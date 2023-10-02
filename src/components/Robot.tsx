import styled from "styled-components";

const Robot = styled.div<{
  $width: number;
  $height: number;
  $avatar: string;
  $x: number;
  $y: number;
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
    ${(props) => props.$x * props.$width}px,
    ${(props) => props.$y * props.$height}px
  );
  z-index: 1;
  transition: transform 500ms;
`;

export default Robot;
