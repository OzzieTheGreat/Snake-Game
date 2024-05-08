import Actor from "./Actor";
interface ICollisionHandler <T ,U>{
    applyAction (actor:T, actor2:U): void;
}
export default ICollisionHandler;
