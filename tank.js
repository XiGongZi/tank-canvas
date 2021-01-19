

class Tank {
  constructor(props) {
    // super(props);
    this.setDefaultPosition(props);
  }
  position = [0, 0];
  x = 1;
  y = 0;
  setDefaultPosition = (arr) => {
    this.position = arr;
  }
  getFocus = () => {
    // 0:left   1:right 2:up 3:down
    if (this.x === -1) return 0;
    if (this.x === 1) return 1;
    if (this.y === 1) return 2;
    if (this.y === -1) return 3;
    else return -1;
  }
  getPosition = () => {
    return this.position;
  }
  move = () => {
    this.position = [
      this.position[0] + this.x,
      this.position[1] + this.y,
    ];
  }
  moveLeft = () => {
    // 左移
    this.x = -1;
    this.y = 0;
    this.move();
  }
  moveRight = () => {
    // 右移
    this.x = 1;
    this.y = 0;
    this.move();
  }
  moveUp = () => {
    // 上移
    this.x = 0;
    this.y = 1;
    this.move();
  }
  moveDown = () => {
    // 下移
    this.x = 0;
    this.y = -1;
    this.move();
  }
}
let tank = new Tank([60,60]);

console.log(tank.getPosition());
console.log(tank.getFocus());