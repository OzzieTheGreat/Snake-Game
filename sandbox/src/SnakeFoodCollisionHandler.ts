import display from "./display";
import Snake from "./Snake";
import Food from "./Food";
import ICollisionHandler from "./CollisionHandler";
class SnakeFoodCollisionHandler implements ICollisionHandler<Snake,Food>{
  public applyAction(snake:Snake, food:Food): void  {
    food.eat();
    snake.grow();
  }
}
export default SnakeFoodCollisionHandler;
