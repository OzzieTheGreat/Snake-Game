import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }
  public turnSnakeLeft() {
    this.slitherer.position.turnSnakeLeft();
  }
  public turnSnakeRight() {
    this.slitherer.position.turnSnakeRight();
  }
  public get snakePosition(): Point {
    return this.slitherer.position;
  }
  public get snakeDirection(): string {
    return this.slitherer.direction;
  }
  public get worldWidth(): number {
    return this.snakeWorld.width;
  }
  public get worldHeight(): number {
    return this.snakeWorld.height;
  }
}

export default SnakeController;

