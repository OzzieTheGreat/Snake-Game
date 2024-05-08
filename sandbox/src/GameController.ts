import WorldModel from "./WorldModel";
import Player from "./Player";
import Snake from "./Snake";
import SnakeController from "./SnakeController";
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import LRKeyInputHandler from "./LRKeyInputHandler";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import CanvasWorldView from "./CanvasWorldView";
import WorldLoader from "./WorldLoader";
import Game from "./Game";
class GameController {
  private world: WorldModel;
  private player1: Player;
  private player2: Player;
  private game: Game;
  constructor(world: WorldModel, player1: Player, player2: Player, g: Game) {
    this.world = world;
    this.player1 = player1;
    this.player2 = player2;
    this.game = g;
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
      } else {
        this.game.players = [];
        this.game.world.dispose();
        this.game.switchContext({});
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }

  public init(data: Game) {
    const totalPlayers = data.numOfHumanPlayers + data.numOfHumanPlayers;
    const players: Player[] = [];

    const worldLoader = new WorldLoader();
    const foodData = ["f".repeat(data.foodCount)]; // Array with "f" characters for food
    worldLoader.readData(foodData, this.game.world);

    let currentX = 10;
    let currentY = 10;
    for (let i = 0; i < totalPlayers; i++) {
      const snake = new Snake(currentX, currentY);
      const controller = new SnakeController(this.game.world, snake);

      if (i < data.numOfHumanPlayers) {
        const inputHandler = new LRKeyInputHandler();
        players.push(new HumanPlayer(controller, inputHandler));
      } else {
        players.push(new AvoidWallsPlayer(controller));
      }
      this.game.players = players;
      const canvasView = new CanvasWorldView(this.game.scalingFactor);
      this.game.world.addView(canvasView);

      this.run();
    }
  }
}
export default GameController;
