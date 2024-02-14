import { useEffect } from "react";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const greenSnake = new Snake();
    const maroonSnake = new Snake();
    const greenWorldModel = new WorldModel(greenSnake);
    const maroonWorldModel = new WorldModel(maroonSnake);
    const worldView = new CanvasWorldView(5);
    const greenworld = new WorldModel(greenSnake);
    const maroonworld = new WorldModel(maroonSnake);
    greenSnake.move(1);
    maroonSnake.move(2);
    greenSnake.turn(3);
    maroonSnake.turn(4);
    console.log(greenSnake);
    console.log(maroonSnake);
    console.log(greenWorldModel);
    console.log(maroonWorldModel);
    console.log(worldView);
    console.log(greenworld.update(1));
    console.log(maroonworld.update(2));
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
