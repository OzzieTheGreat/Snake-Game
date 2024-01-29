class SnakeController {
  private snake: Snake;
  private worldModel: WorldModel;
  constructor(snakeDirection: string, w: WorldModel) {
    this.snakeWorld = new Snake(snakeDirection, w);
    this.slitherer = w;
  }
  public turnSnakeLeft(snakeDirection: string, w: WorldModel, snake: Snake) {
    this.snake.turnLeft();
  }
  public turnSnakeRight(snakeDirection: string, w: WorldModel, snake: Snake) {
    this.snake.turnRight();
  }
  public get snakePosition() {
    return this.snake.position;
  }
  public get snakeDirection() {
    return this.snake.direction;
  }
  get worldWidth() {
    return this.worldModel.width;
  }
  get worldHeight() {
    return this.worldModel.height;
  }
}
export default SnakeController;
