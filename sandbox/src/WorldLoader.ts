import Food from "./Food";
import WorldModel from "./WorldModel";

class WorldLoader {
  public readData(levelData: string[], world: WorldModel): void {
    levelData.forEach((rowData, rowIndex) => {
      const actorChars = rowData.split("");

      actorChars.forEach((actorChar, colIndex) => {
        if (actorChar === "f") {
          const food = new Food(colIndex, rowIndex);
        }
      });
    });
  }
}
export default WorldLoader;
