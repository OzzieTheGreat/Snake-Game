class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(xcoord: number, ycoord: number) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  public turnSnakeLeft() {
    this.xcoord--;
  }
  public turnSnakeRight() {
    this.xcoord++;
  }
  public get x(): number {
    return this.xcoord;
  }
  public get y(): number {
    return this.ycoord;
  }
}
export default Point;
