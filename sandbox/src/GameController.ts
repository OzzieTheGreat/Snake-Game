import WorldModel from "./WorldModel";
import Player from "./Player";
class GameController {
  private world: WorldModel;
  private player1: Player;
  private player2: Player;
  constructor(world: WorldModel, player1: Player, player2: Player) {
    this.world = world;
    this.player1 = player1;
    this.player2 = player2;
  }
  public set Player1(player: Player) {
    this.player1 = player;
  }
  public set Player2(player: Player) {
    this.player2 = player;
  }

  public run() {
    let lastTime = 0;
    let updateFrame = (mili: number) => {
      this.player1.makeTurn();
      this.player2.makeTurn();
      if (mili > lastTime + 250) {
        this.world.update(1);
        lastTime = lastTime + 250;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
}
export default GameController;
