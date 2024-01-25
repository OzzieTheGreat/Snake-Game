import Point from "./Point";
import WorldModel from "./WorldModel";
class Snake {
  private currentPosition: number;
  private currentDirection: string;
  private newPoint: Point;
  private wor: WorldModel;
  constructor(snakeDirection: string, w: WorldModel) {
    this.currentPosition = 0;
    this.currentDirection = snakeDirection;
    this.newPoint = new Point(0, 0);
    this.wor = w;
  }
  public move(position: number) {
    if (this.currentDirection === "left") {
      this.currentPosition = position + 1;
    } else if (this.currentDirection === "right") {
      this.currentPosition = position - 1;
    }
    if (this.currentDirection === "up") {
      this.currentPosition = position + 1;
    }
    if (this.currentDirection === "down") {
      this.currentPosition = position - 1;
    }
  }
  /**
   * @deprecated Use {turn}
   */
  public turn(direction: string) {
    if (direction === "up") {
      this.currentDirection = "up";
    } else if (direction === "down") {
      this.currentDirection = "dowm";
    }
  }
  turnLeft() {
    if (this.currentDirection === "left") {
      this.currentDirection = "dowm";
    } else if (this.currentDirection === "right") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "right";
    }
  }
  turnRight() {
    if (this.currentDirection === "left") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "right") {
      this.currentDirection = "dowm";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "right";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    }
  }
  public get position() {
    return this.currentPosition;
  }
  public get direction() {
    return this.currentDirection;
  }
  public set worldmodel(w: WorldModel) {
    this.wor = w;
  }
}

export default Snake;
