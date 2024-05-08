import Point from "./Point";
import Collidable from "./Collidable";
class Snake implements Collidable {
  private currentParts: Point[];
  private currentDirection: string;
  private startPosition: Point;
  private size: number;
  private isCurrentlyActive: boolean;
  constructor(xcoord: number, ycoord: number) {
    this.startPosition = new Point(xcoord, ycoord);
    this.currentParts = [this.startPosition];
    this.currentDirection = "left";
    this.size = 0;
    this.isCurrentlyActive = true;
    for (let i = 0; i < this.size - 1; i++) {
      this.currentParts.push(
        new Point(this.currentParts[i].x + 1, this.currentParts[i].y - 1),
      );
    }
  }
  public move(numOfSpaces: number) {
    for (let i = this.currentParts[0].y - 1; i > 0; i--) {
      this.currentParts.push(this.currentParts[0]); // = this.currentParts[0-1]
    }
    if (this.currentDirection === "left") {
      this.currentParts[0] = new Point(
        this.currentParts[0].x + 1,
        this.currentParts[0].y,
      );
    } else if (this.currentDirection === "right") {
      this.currentParts[0] = new Point(
        this.currentParts[0].x - 1,
        this.currentParts[0].y,
      );
    }
    if (this.currentDirection === "up") {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y + 1,
      );
    }
    if (this.currentDirection === "down") {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y - 1,
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
  public turnRight() {
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
  public didCollide(s: any): boolean {
    if (s.type !== "snake") {
      return this.position.equals(s.position);
    } else if (this !== s) {
      let parts = s.allParts.slice(1);
      return (
        parts.some(this.position.equals.bind(s.position)) ||
        this.position.equals(s.position)
      );
    } else {
      let parts = s.allParts.slice(1);
      return parts.some(this.position.equals.bind(s.position));
    }
  }

  public grow() {
    if (this.currentDirection === "left") {
      this.allParts.push(new Point(this.position.x, this.position.y - 1));
    } else if (this.currentDirection === "right") {
      this.allParts.push(new Point(this.position.x, this.position.y + 1));
    } else if (this.currentDirection === "left") {
      this.allParts.push(new Point(this.position.x + 1, this.position.y));
    } else if (this.currentDirection === "right") {
      this.allParts.push(new Point(this.position.x - 1, this.position.y));
    }
  }

  public die() {
    this.isCurrentlyActive = false;
  }
  public update(): void {}
  public get position(): Point {
    return this.currentParts[0];
  }
  public get direction(): string {
    return this.currentDirection;
  }
  public get isActive() {
    return this.isCurrentlyActive;
  }
  public get allParts() {
    return this.currentParts;
  }
}

export default Snake;
