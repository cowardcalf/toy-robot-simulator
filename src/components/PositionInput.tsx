import { isNil, isNumber } from "lodash";
import styled from "styled-components";

const StyledPositionInput = styled.input`
  width: 4em;
  height: 3em;
  background-color: transparent;
  border-radius: 5px;
  text-align: center;
`;

type PositionInputProps = {
  value?: number;
  placeholder?: string;
  onChange: (value: number) => void;
  min: number;
  max: number;
};

const PositionInput = ({
  value,
  onChange,
  min,
  max,
  placeholder
}: PositionInputProps) => {
  function onChangeInner(e: React.FormEvent<HTMLInputElement>) {
    const newValue = parseInt(e.currentTarget.value);
    if (isNumber(newValue)) {
      onChange(newValue);
    }
  }

  return (
    <StyledPositionInput
      value={!isNil(value) ? value : ""}
      onChange={onChangeInner}
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
    />
  );
};

export default PositionInput;
