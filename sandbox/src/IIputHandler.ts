class IIputHandler {
  public madeLeftMove() {
    return true;
  }
  public madeRightMove() {
    return true;
  }
  public resetLeftMove() {
    this.madeLeftMove();
  }
  public resetRightMove() {
    this.madeRightMove();
  }
}
export default IIputHandler;
