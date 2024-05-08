import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";
import Actor from "./Actor";
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  public display(world: WorldModel): void {
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
  }
  dispose(): void {
    document.body.removeChild(this.worldCanvas);
  }
  public update(actors: Actor[]) {
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    for (const actor of actors) {
      if ("snake") {
      } else if ("food") {
        const x = this.scalingFactor;
        const y = this.scalingFactor;

        this.context.fillRect(x, y, this.scalingFactor, this.scalingFactor);
      }
    }
  }
}
export default CanvasWorldView;
