import MainMenuController from "./MainMenuController";
import GameController from "./GameController";
import Player from "./Player";
import WorldModel from "./WorldModel";
class Game {
  private contextSwitches: Map<string, string>;
  private controllers: Map<string, any>;
  private currentContext: string;
  public players: Player[];
  public world: WorldModel;
  public numOfHumanPlayers: number;
  public numOfAIPlayers: number;
  public foodCount: number;
  public scalingFactor: number;
  constructor() {
    this.contextSwitches = new Map([
      ["START", "GAME"],
      ["GAME", "START"],
    ]);
    this.controllers = new Map([
      ["START", "GAME"],
      ["GAME", "START"],
    ]);
    this.currentContext = "START";
    this.players = [];
    this.world = new WorldModel("");
    this.numOfHumanPlayers = 1;
    this.numOfAIPlayers = 1;
    this.foodCount = 1;
    this.scalingFactor = 1;
  }
  public switchContext(data: any): void {
    this.currentContext = this.contextSwitches.get(this.currentContext)!;
    this.controllers.get(this.currentContext)!.init(data);
  }
}
export default Game;
