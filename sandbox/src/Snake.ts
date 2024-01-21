
class Snake {
  private currentPosition: number;
  private currentDirection: string;
  constructor(snakeDirection: string) {
    this.currentPosition = 0;
    this.currentDirection = snakeDirection;
  }
  public move(position: number) {
    if (this.currentDirection === "right") {
      this.currentPosition = position + 1;
    } else if (this.currentDirection === "left") {
      this.currentPosition = position - 1;
    }
  }
  public turn(direction: string) {
    if (direction === "foward") {
      this.currentDirection = "foward";
    } else if (direction === "backward") {
      this.currentDirection = "backward";
    }
  }
  public get position() {
    return this.currentPosition;
  }
  public get direction() {
    return this.currentDirection;
  }
}

export default Snake;
