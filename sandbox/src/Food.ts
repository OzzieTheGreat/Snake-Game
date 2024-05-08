import Snake from "./Snake";
import Point from "./Point";
import Actor from "./Actor";
class Food implements Actor {
  private currentPosition: Point;
  private isCurrentlyActive: boolean;
  constructor(xcoord: number, ycoord: number) {
    this.currentPosition = new Point(xcoord, ycoord);
    this.isCurrentlyActive = true;
  }
  public eat() {
    this.isCurrentlyActive = false;
  }
  public update() {}
  public get position() {
    return this.currentPosition;
  }
  public get isActive() {
    return this.isCurrentlyActive;
  }
  public get type(): string {
    return "Food";
  }
  public get Position1(): Point {
    return this.currentPosition;
  }
}
export default Food;
