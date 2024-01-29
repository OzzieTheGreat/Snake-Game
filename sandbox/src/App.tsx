import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import WorldModel from "./WorldModel";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const greenSnakeWorld = new WorldModel("green", "left");
    const maroonSnakeWorld = new WorldModel("maroon", "right");
    const blueSnakeWorld = new WorldModel("blue", "down");
    const greenSnake = new Snake("left", greenSnakeWorld);
    const maroonSnake = new Snake("right", maroonSnakeWorld);
    const blueSnake = new Snake("down", blueSnakeWorld);
    greenSnakeWorld.update(1);
    maroonSnakeWorld.update(2);
    blueSnakeWorld.update(3);
    greenSnake.turn("left");
    greenSnake.move(5);
    maroonSnake.turn("right");
    maroonSnake.move(3);
    blueSnake.turn("right");
    blueSnake.move(7);
    console.log(greenSnake);
    console.log(greenSnake.position);
    console.log(maroonSnake.position);
    console.log(blueSnake.position);
    console.log(greenSnake.direction);
    console.log(maroonSnake.direction);
    console.log(blueSnake.direction);
    console.log(greenSnakeWorld.Snakes);
    console.log(maroonSnakeWorld.Snakes);
    console.log(blueSnakeWorld.Snakes);
    console.log(greenSnakeWorld.update);
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
