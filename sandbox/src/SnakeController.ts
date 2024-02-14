import Snake from "./Snake";
import WorldModel from "./WorldModel";
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer = Snake;
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = Snake;
  }
  public turnSnakeLeft() {
    this.snakeWorld.snakePosition.turnLeft();
  }
  public turnSnakeRight() {
    this.snakeWorld.snakePosition.turnRight();
  }
  public get snakePosition(): Snake {
    return this.snakeWorld.snakePosition;
  }
  public get snakeDirection(): string {
    return this.snakeWorld.snakePosition.direction;
  }
  public get worldWidth(): number {
    return this.snakeWorld.width;
  }
  public get worldHeight(): number {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
