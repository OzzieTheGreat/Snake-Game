import Snake from "./Snake";
import Point from "./Point";
import IWorldView from "./IWorldView";
import CanvasWorldView from "./CanvasWorldView";
import Actor from "./Actor"
import ArrayIterator from "./ArrayIterator";
class WorldModel {
  private actors: Actor[];
  private allSnakes: Snake[] = [];
  private allViews: IWorldView[] = [];
  private worldView: IWorldView | null;
  constructor(aca:string) {
    this.actors = [];
    this.allViews = [];
    this.worldView = null;
  }
  public update(steps: number) {
    this.allSnakes[0].move(steps);
    if (this.allViews) {
      this.allViews[0].display(this);
    }
    this.allSnakes.forEach((s) => s.move(0));
    this.allViews.forEach((v) => v.display(this));
  }

  public addSnake(s: Snake) {
    this.allSnakes.push(s);
  }

  public addView(v: IWorldView) {
    this.allViews.push(v);
  }

  public get snakePosition(): Point {
    return this.allSnakes[0].position;
  }
  public get width(): number {
    return this.width;
  }
  public get height(): number {
    return this.height;
  }
  public get actorslist()  {
    return new ArrayIterator(this.actors);
  }
  public set view(allViews: IWorldView) {
    this.allViews[0] = allViews;
  }
}
export default WorldModel;

