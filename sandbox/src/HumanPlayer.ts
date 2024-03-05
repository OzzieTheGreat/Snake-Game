import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";
class HumanPlayer extends Player {
  private controller: SnakeController;
  private handler: IInputHandler;
  constructor(sc: SnakeController, ih: IInputHandler) {
    super(sc);
    this.controller = sc;
    this.handler = ih;
  }
  public makeTurn() {
    if (this.handler.madeLeftMove()) {
      this.controller.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    if (this.handler.madeRightMove()) {
      this.controller.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }
}
export default HumanPlayer;
