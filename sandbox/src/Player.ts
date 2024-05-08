import SnakeController from "./SnakeController";
abstract class Player {
  protected sc: SnakeController;
  constructor(controller: SnakeController) {
    this.sc = controller;
  }
  abstract makeTurn(): void;
  public isActive(): boolean {
    return true;
  }
}
export default Player;
