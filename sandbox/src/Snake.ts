import Point from "./Point";
class Snake {
  private currentPosition: Point;
  private currentDirection: string;
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "left";
  }
  public move(numOfSpaces: number) {
    if (this.currentDirection === "left") {
      this.currentPosition = new Point(
        this.currentPosition.x + 1,
        this.currentPosition.y,
      );
    } else if (this.currentDirection === "right") {
      this.currentPosition = new Point(
        this.currentPosition.x - 1,
        this.currentPosition.y,
      );
    }
    if (this.currentDirection === "up") {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + 1,
      );
    }
    if (this.currentDirection === "down") {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - 1,
      );
    }
  }
  /**
   * @deprecated Use {turn}
   */
  public turn(direction: number) {
    if (direction === 0) {
      this.turnLeft();
    } else if (direction === 1) {
      this.turnRight();
    }
  }
  public turnLeft() {
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
      this.currentDirection = "down";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "right";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    }
  }
  public get position(): Point {
    return this.currentPosition;
  }
  public get direction(): string {
    return this.currentDirection;
  }
}

export default Snake;
