class AvoidWallsPlayer {
  private turnSnakeLeft: [number, number] = [0, 0];
  private turnSnakeRight;
  constructor(sc: SnakeController) {}
  makeTurn() {
    public makeTurn(x: number, y: number, snake: Snake, wm: WorldModel) {
      if (snake.direction === Direction.Left && x === 0) {
        this.SnakeController.turnSnakeRight("right");
      } else if (snake.direction === Direction.Right && x === 0) {
        this.SnakeController.turnSnakeLeft("left");
      }
      if (snake.direction === Direction.Up && y === 0) {
        this.SnakeController.turnSnakeDown("down");
      } else if (snake.direction === Direction.Down && y === 0) {
        this.SnakeController.turnSnakeUp("up");
      }
    }
}
}
export default AvoidWallsPlayer;
