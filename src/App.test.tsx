import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("App UI tests", () => {
  const { getAllByRole, getByRole, getByTitle, getAllByTitle } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Heading
  expect(getByRole("heading")).toHaveTextContent("Toy Robot Simulator");
  // The table grids
  expect(getByTitle("tableView")).toBeDefined();
  expect(getAllByTitle("tableCell")).toHaveLength(25);
  // The buttons
  expect(getByRole("button", { name: "Up" })).toBeDefined();
  expect(getByRole("button", { name: "Down" })).toBeDefined();
  expect(getByRole("button", { name: "Left" })).toBeDefined();
  expect(getByRole("button", { name: "Right" })).toBeDefined();
  // The position inputs
  expect(getAllByRole("spinbutton")).toHaveLength(2);
  expect(getByRole("button", { name: "Set position" })).toBeDefined();
});
