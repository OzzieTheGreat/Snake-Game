import Player from "./Player";
import SnakeController from "./SnakeController";
class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }
  makeTurn() {
    const dir = this.sc.snakeDirection;
    const snake = this.sc.snakePosition;

    if (dir === "left" && snake.y === 0) {
      this.sc.snakePosition.turnSnakeRight();
    } else if (dir === "right" && snake.y === this.sc.worldHeight - 1) {
      this.sc.snakePosition.turnSnakeLeft();
    } else if (dir === "up" && snake.x === 0) {
    } else if (dir === "down" && snake.x === this.sc.worldWidth - 1) {
    }
  }
}
export default AvoidWallsPlayer;

