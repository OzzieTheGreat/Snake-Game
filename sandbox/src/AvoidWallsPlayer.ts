import Player from "./Player";
import SnakeController from "./SnakeController";
class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }
  makeTurn() {
    const dir = this.sc.snakeDirection;
    const snake = this.sc.snakePosition;

    if (dir === "left" && snake.position.y === 0) {
      this.sc.snakePosition.turnRight();
    } else if (
      dir === "right" &&
      snake.position.y === this.sc.worldHeight - 1
    ) {
      this.sc.snakePosition.turnLeft();
    } else if (dir === "up" && snake.position.x === 0) {
    } else if (dir === "down" && snake.position.x === this.sc.worldWidth - 1) {
    }
  }
}
export default AvoidWallsPlayer;
