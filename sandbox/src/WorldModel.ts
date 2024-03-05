import Snake from "./Snake";
import Point from "./Point";
import IWorldView from "./IWorldView";
class WorldModel {
  private snake: Snake;
  private worldView: IWorldView | null;
  constructor(snake: Snake) {
    this.worldView = null;
    this.snake = snake;
  }
  public update(steps: number) {
    this.snake.move(steps);
    if (this.worldView) {
      this.worldView.display(this);
    }
  }
  public get snakePosition(): Point {
    return this.snake.position;
  }
  public get width(): number {
    return this.width;
  }
  public get height(): number {
    return this.height;
  }
  public set view(worldView: IWorldView) {
    this.worldView = worldView;
  }
}
export default WorldModel;

