let myCanvas = document.getElementById("myCanvas");
let myCanvas1 = document.getElementById("myCanvas1");
let cxt = myCanvas.getContext("2d");
let cxt1 = myCanvas1.getContext("2d");
cxt.fillStyle="#000";
cxt1.fillStyle="#26ad9c";

class Tank {
  constructor(props = {
    posi: [0, 0],
    cxt: {}
  }) {
    this.cxt = props.cxt;
    this.position = props.posi;
    this.init();
  }
  position = [0, 0];
  x = 1;
  y = 0;
  init = () => {
    this.clearTank();
    this.drawTank(this.getTank());
  }
  drawTank = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        this.cxt.fillRect(10*arr[i][j][0],10*arr[i][j][1],10,10);
      }
    }
  }
  clearTank = () => {
    this.cxt.clearRect(
      0,
      0,
      1920,
      600
    );
  }
  getTank = () => {
    // 根据坐标生成tank
    let [x, y] = this.getPosition();
    let foward = this.getFoward();
    // left
    if (foward === 0) return [
      [[x, y-1], [x+1, y-1]],
      [[x-1, y], [x, y] ],
      [[x, y+1], [x+1, y+1]]
    ];
    // right
    if (foward === 1) return [
      [[x-1, y-1], [x, y-1]],
      [[x, y], [x+1, y]],
      [[x-1, y+1], [x, y+1]]
    ];
    // up
    if (foward === 2) return [
      [[x, y-1]],
      [[x-1, y], [x, y], [x+1, y]],
      [[x-1, y+1], [x+1, y+1]]
    ];
    // down
    if (foward === 3) return [
      [[x-1, y-1], [x+1, y-1]],
      [[x-1, y],[x, y], [x+1, y]],
      [[x, y+1]]
    ];
  
  }
  getFoward = () => {
    // 0:left 1:right 2:up 3:down
    if (this.x === -1) return 0;
    if (this.x === 1) return 1;
    if (this.y === -1) return 2;
    if (this.y === 1) return 3;
    else return -1;
  }
  getPosition = () => {
    return this.position;
  }
  moveAfter = () => {
    this.position = [
      this.position[0] + this.x,
      this.position[1] + this.y,
    ];
    this.init();
  }
  moveLeft = () => {
    // 左移
    this.x = -1;
    this.y = 0;
    this.moveAfter();
  }
  moveRight = () => {
    // 右移
    this.x = 1;
    this.y = 0;
    this.moveAfter();
  }
  moveUp = () => {
    // 上移
    this.x = 0;
    this.y = -1;
    this.moveAfter();
  }
  moveDown = () => {
    // 下移
    this.x = 0;
    this.y = 1;
    this.moveAfter();
  }
}

let tank = new Tank({posi: [6, 6],cxt});
let tank1 = new Tank({posi: [16, 16],cxt: cxt1});




document.querySelector("body").onkeydown = function(e) {
  console.log(e.key)
  switch (e.key) {
    case "ArrowLeft":
      tank.moveLeft();
      break;
    case "ArrowUp":
      tank.moveUp();
      break;
    case "ArrowRight":
      tank.moveRight();
      break;
    case "ArrowDown":
      tank.moveDown();
      break;
    case "a":
      tank1.moveLeft();
      break;
    case "w":
      tank1.moveUp();
      break;
    case "d":
      tank1.moveRight();
      break;
    case "s":
      tank1.moveDown();
      break;
  
    default:
      break;
  }
}
