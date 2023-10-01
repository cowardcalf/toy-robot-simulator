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
  onChange: () => void;
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
  return (
    <StyledPositionInput
      value={value}
      onChange={onChange}
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
    />
  );
};

export default PositionInput;
