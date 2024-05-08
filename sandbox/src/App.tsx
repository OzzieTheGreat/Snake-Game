import "./App.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";
import ActorCollisionHandler from "./ActorCollisionHandlers";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";
import SnakeFoodCollisionHandler from "./SnakeSnakeCollisionHandler";
import GameController from "./GameController";

export default function App() {
  useEffect(() => {
    const greenSnake = new Snake(0, 0);
    const maroonSnake = new Snake(0, 0);
    const greenWorldModel = new WorldModel("snake");
    const maroonWorldModel = new WorldModel("snake");
    const worldView = new CanvasWorldView(5);
    const greenworld = new WorldModel("snake");
    const maroonworld = new WorldModel("snake");
    const collisionHand = new ActorCollisionHandler();
    greenSnake.move(1);
    maroonSnake.move(2);
    greenSnake.turn(3);
    maroonSnake.turn(4);
    greenWorldModel.addSnake(greenSnake);
    maroonWorldModel.addSnake(maroonSnake);
    greenworld.addView(worldView);
    maroonworld.addView(worldView);
    collisionHand.addCollisionAction(
      "Snake",
      "Food",
      new SnakeFoodCollisionHandler(),
    );
    collisionHand.addCollisionAction(
      "Snake",
      "Snake",
      new SnakeSnakeCollisionHandler(),
    );
    console.log(greenSnake);
    console.log(maroonSnake);
    console.log(greenWorldModel);
    console.log(maroonWorldModel);
    console.log(worldView);
    console.log(greenworld.update(1));
    console.log(maroonworld.update(2));

    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
