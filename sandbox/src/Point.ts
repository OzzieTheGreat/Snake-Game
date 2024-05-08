class Point {
  private xcoord: number;
  private ycoord: number;

  constructor(xcoord: number, ycoord: number) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  public turnLeft() {
    this.xcoord--;
  }
  public turnRight() {
    this.xcoord++;
  }
  public equals(p: Point) {
    return this.xcoord === p.xcoord && this.ycoord === p.ycoord;
  }

  public get x(): number {
    return this.xcoord;
  }
  public get y(): number {
    return this.ycoord;
  }
}
export default Point;
