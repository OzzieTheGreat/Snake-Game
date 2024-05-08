import Snake from "./Snake";
import ICollisionHandler from "./CollisionHandler";
class SnakeSnakeCollisionHandler implements ICollisionHandler<Snake,Snake>{
    public applyAction(snake1: Snake, snake2:Snake): void{
        snake1.die();
    }
}
export default SnakeSnakeCollisionHandler;
