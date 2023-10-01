import "./App.scss";
import Button from "./components/Button";
import ButtonsContainer from "./components/ButtonsContainer";
import ControllerContainer from "./components/ControllerContainer";
import MainContainer from "./components/MainContainer";
import PositionControlContainer from "./components/PositionControlContainer";
import PositionInput from "./components/PositionInput";
import PositionSetButton from "./components/PositionSetButton";
import StatusBar from "./components/StatusBar";
import { TABLE_DEFAULT_PARAMS } from "./constants/tableLimits";

import Table from "./features/table/Table";

const emptyFunc = () => {
  /* nothing */
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toy Robot Simulator</h1>
      </header>
      <MainContainer>
        <Table {...TABLE_DEFAULT_PARAMS} />
        <ControllerContainer>
          <StatusBar />
          <ButtonsContainer>
            <Button label="Up" onClick={emptyFunc} />
            <Button label="Down" onClick={emptyFunc} />
            <Button label="Left" onClick={emptyFunc} />
            <Button label="Right" onClick={emptyFunc} />
          </ButtonsContainer>
          <PositionControlContainer>
            <PositionInput
              // value={0}
              min={0}
              max={4}
              placeholder="X"
              onChange={emptyFunc}
            />
            <PositionInput
              // value={0}
              min={0}
              max={4}
              placeholder="Y"
              onChange={emptyFunc}
            />
            <PositionSetButton onClick={emptyFunc} />
          </PositionControlContainer>
        </ControllerContainer>
      </MainContainer>
    </div>
  );
}

export default App;
