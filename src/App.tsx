import "./App.scss";
import MainContainer from "./components/MainContainer";
import ControllerPanel from "./features/controllerPanel/ControllerPanel";

import Table from "./features/table/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toy Robot Simulator</h1>
      </header>
      <MainContainer>
        <Table />
        <ControllerPanel />
      </MainContainer>
    </div>
  );
}

export default App;
