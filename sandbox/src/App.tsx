import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const greenSnake = new Snake("left");
    const maroonSnake = new Snake("right");
    const blueSnake = new Snake("down");
    greenSnake.turn("left");
    greenSnake.move(5);
    maroonSnake.turn("right");
    maroonSnake.move(3);
    blueSnake.turn("right");
    blueSnake.move(7);
    console.log(greenSnake.position);
    console.log(maroonSnake.position);
    console.log(blueSnake.position);
    console.log(greenSnake.direction);
    console.log(maroonSnake.direction);
    console.log(blueSnake.direction);
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
