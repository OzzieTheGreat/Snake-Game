import "./App.css";
import { useEffect } from "react";
import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";
import checkerboard from "./checkerboard.jpg";
export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
    if (gameCanvas) {
      const ctx = gameCanvas.getContext("2d");
      const floorImage = new Image(256, 256);
      floorImage.src = checkerboard;
      floorImage.onload = () => {
        ctx?.drawImage(floorImage, 5, 10);
      };
    }

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
      <canvas width="320" height="330" id="game"></canvas>
      <h1>Snake Game</h1>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
