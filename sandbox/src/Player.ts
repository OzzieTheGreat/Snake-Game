class Player {
  private SnakeController: sc;
  constructor(SnakeController: sc) {
    this.sc = SnakeController;
  }
  public abtract() {
    return this.SnakeController;
  }
  public makeTurn() {
    this.SnakeController.turnSnakeLeft(
      "left",
      this.SnakeController.worldModel,
      this.SnakeController.snake,
    );
    this.SnakeController.turnSnakeRight(
      "right",
      this.SnakeController.worldModel,
      this.SnakeController.snake,
    );
  }
}
export default Player;
