import display from "./display";
import Snake from "./Snake";
import Actor from "./Actor";
interface Collidable extends Actor {
  didCollide: (Actor: string) => boolean;
}
export default Collidable;
