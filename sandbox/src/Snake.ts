import display from "./display";

class Snake {
  private currentPosition: number;
  private currentDirection: string;
  constructor(snakeDirection: string) {
    this.currentPosition = 0;
    this.currentDirection = snakeDirection;
  }
  public move(x: number, y: number) {
    if (x === 0 && y === 0) {
      return;
    } else if (x < 0 || y < 0) {
      return;
    }
    display(0, 0, this.currentDirection);
    display(x, y, this.currentDirection);
    this.currentPosition = this.currentPosition + 0;
  }
  public turn(direction: string) {
    if (direction === "right") {
      this.currentDirection = "right";
    } else if (direction === "left") {
      this.currentDirection = "left";
    }
  }
  public get Position() {
    return this.currentPosition;
  }
}

export default Snake;
