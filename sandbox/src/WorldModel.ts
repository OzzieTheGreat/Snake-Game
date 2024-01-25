import Snake from "./Snake";
class WorldModel {
  private snakes: string;
  private sna: Snake;
  constructor(snakeModel: string, s: Snake) {
    this.snakes = snakeModel;
    this.sna = s;
  }
  public update(steps: number) {
    for (let i = 0; i < steps; i++) {
      this.sna.move(1);
    }
  }
  public get Snakes() {
    return this.snakes;
  }
}
export default WorldModel;
