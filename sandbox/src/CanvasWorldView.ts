import WorldModel from "./WorldModel";
class CanvasWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  display(world: WorldModel): void {
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
  }
}
export default CanvasWorldView;
